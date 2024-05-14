using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.IdentityModel.Tokens.Jwt;
using webtruyen.DTO;
using webtruyen.Model;
using webtruyen.Ulti;

namespace webtruyen.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private WebtruyenContext context;

        public HomeController()
        {
            this.context = new WebtruyenContext();
        }

        [HttpGet]
        [Route("getAllCategories")]
        public IActionResult getAllCategories()
        {
            List<Category> categories = context.Categories.ToList();
            return Ok(categories);
        }

        [HttpPost]
        [Route("getAllStories")]
        public IActionResult getAllStories([FromBody] StoryRequest storyRequest)
        {
            List<Story> stories = context.Stories.Include(n => n.Category).Include(n => n.Chapers).Where(n => n.IsActive == true).ToList();
            if(storyRequest != null)
            {
                if (storyRequest.categoryID != null)
                {
                    stories = stories.Where(n=> n.CategoryId == storyRequest.categoryID).ToList();
                }
                if(storyRequest.searchValue != null)
                {
                    stories = stories.Where(n => n.Title.ToLower().Contains(storyRequest.searchValue.ToLower())).ToList();
                }
                if(storyRequest.numberOfChapters != null)
                {
                    if(storyRequest.numberOfChapters != "under 100 chapters")
                    {
                        stories = stories.Where(n => n.Chapers.Count() < 100).ToList();
                    }
                    else if(storyRequest.numberOfChapters != "100 - 500 chapters")
                    {
                        stories = stories.Where(n => n.Chapers.Count() >= 100 && n.Chapers.Count() < 500).ToList();
                    }
                    else if(storyRequest.numberOfChapters != "100 - 500 chapters")
                    {
                        stories = stories.Where(n => n.Chapers.Count() >= 500 && n.Chapers.Count() <= 1000).ToList();
                    }
                    else
                    {
                        stories = stories.Where(n => n.Chapers.Count() > 1000).ToList();
                    }
                }
            }
            return Ok(stories);
        }

        [HttpGet]
        [Route("getStoryDetail/{id}")]
        public IActionResult getStoryByID(int id)
        {
            Story story = context.Stories.Include(n => n.Category).Include(n => n.Chapers).Include(n => n.Reviews).ThenInclude(n => n.User).FirstOrDefault(n => n.Id == id);
            if(story != null)
            {
                return Ok(story);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpGet]
        [Route("getChapterDetail/{id}")]
        public IActionResult getChapterDetailByID(int id)
        {
            Chaper chaper = context.Chapers.FirstOrDefault(n => n.Id == id);
            var authHeader = HttpContext.Request.Headers["Authorization"].FirstOrDefault();
            var token = authHeader.Substring("Bearer ".Length).Trim();

            var handler = new JwtSecurityTokenHandler();
            var jwtToken = handler.ReadJwtToken(token);

            // Lấy thông tin từ JWT
            var email = jwtToken.Claims.FirstOrDefault(claim => claim.Type == JwtRegisteredClaimNames.Email)?.Value;
            Account account = context.Accounts.FirstOrDefault(n => n.Equals(email));
            if (chaper != null )
            {
                if(chaper.Status == false)
                {
                    return Ok(chaper);
                }
                else
                {
                    if (account != null && account.Chapters.Contains(chaper))
                    {
                        return Ok(chaper);
                    }
                    else
                    {
                        return BadRequest("Bạn cần unlock để đọc trang truyện này");
                    }                
                }
            }
            else
            {
                return NotFound();
            }
        }
        [Authorize(Policy = "User")]
        [HttpPost]
        [Route("updateProfile")]
        public IActionResult getUserProfile([FromBody] AccountInfoDTO request)
        {
            var authHeader = HttpContext.Request.Headers["Authorization"].FirstOrDefault();
            var token = authHeader.Substring("Bearer ".Length).Trim();

            var handler = new JwtSecurityTokenHandler();
            var jwtToken = handler.ReadJwtToken(token);

            // Lấy thông tin từ JWT
            var email = jwtToken.Claims.FirstOrDefault(claim => claim.Type == JwtRegisteredClaimNames.Email)?.Value;
            Account account = context.Accounts.FirstOrDefault(n => n.Email == email);
            account.Address = request.address;
            account.Phone = request.phone;
            account.Password = request.password;
            account.ModifiedDate = DateTime.Now;
            context.SaveChanges();
            return Ok(account);
        }

        [Authorize(Policy = "User")]
        [HttpPost]
        [Route("userprofile")]
        public IActionResult updateProfile()
        {
            var authHeader = HttpContext.Request.Headers["Authorization"].FirstOrDefault();
            var token = authHeader.Substring("Bearer ".Length).Trim();

            var handler = new JwtSecurityTokenHandler();
            var jwtToken = handler.ReadJwtToken(token);

            // Lấy thông tin từ JWT
            var email = jwtToken.Claims.FirstOrDefault(claim => claim.Type == JwtRegisteredClaimNames.Email)?.Value;
            Account account = context.Accounts.FirstOrDefault(n => n.Email == email);
            return Ok(account);
        }

        [Authorize(Policy = "User")]
        [HttpGet]
        [Route("history")] 
        public IActionResult getHistory()
        {
            var authHeader = HttpContext.Request.Headers["Authorization"].FirstOrDefault();
            var token = authHeader.Substring("Bearer ".Length).Trim();

            var handler = new JwtSecurityTokenHandler();
            var jwtToken = handler.ReadJwtToken(token);

            // Lấy thông tin từ JWT
            var email = jwtToken.Claims.FirstOrDefault(claim => claim.Type == JwtRegisteredClaimNames.Email)?.Value;
            List<Story> stories = context.Stories.Where(n => n.Users.FirstOrDefault().Email == email).ToList();
            return Ok(stories);
        }

        [HttpPost]
        [Route("unlock-all")]
        [Authorize(Policy = "User")]
        public IActionResult unlockStoryAll([FromBody] int storyID)
        {
            var authHeader = HttpContext.Request.Headers["Authorization"].FirstOrDefault();
            var token = authHeader.Substring("Bearer ".Length).Trim();

            var handler = new JwtSecurityTokenHandler();
            var jwtToken = handler.ReadJwtToken(token);

            // Lấy thông tin từ JWT
            var email = jwtToken.Claims.FirstOrDefault(claim => claim.Type == JwtRegisteredClaimNames.Email)?.Value;
            Account account = context.Accounts.FirstOrDefault(n => n.Equals(email));
            Story story = context.Stories.Include(n => n.Chapers).FirstOrDefault(n => n.Id == storyID);
            if (story != null && account.AccountBalance == (10 * story.Chapers.Count()))
            {
                account.Chapters = story.Chapers.Where(n => n.Status == true).ToList();
                account.AccountBalance = account.AccountBalance - (10 * story.Chapers.Count());
                context.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest("Không đủ xu. Vui lòng nạp thêm để đọc truyện");
            }
        }

        [HttpPost]
        [Route("unlockChapters")]
        [Authorize(Policy = "User")]
        public IActionResult unlockChapters([FromBody] List<long> chapterIDs)
        {
            var authHeader = HttpContext.Request.Headers["Authorization"].FirstOrDefault();
            var token = authHeader.Substring("Bearer ".Length).Trim();

            var handler = new JwtSecurityTokenHandler();
            var jwtToken = handler.ReadJwtToken(token);

            // Lấy thông tin từ JWT
            var email = jwtToken.Claims.FirstOrDefault(claim => claim.Type == JwtRegisteredClaimNames.Email)?.Value;
            Account account = context.Accounts.FirstOrDefault(n => n.Equals(email));
            List<Chaper> chapers = context.Chapers.Include(n => chapterIDs.Contains(n.Id)).ToList();
            if (chapers != null && account.AccountBalance == (10 * chapers.Count()))
            {
                account.Chapters = chapers;
                account.AccountBalance = account.AccountBalance - (10 * chapers.Count());
                context.SaveChanges();
                return Ok();
            }
            else
            {
                return BadRequest("Không đủ xu. Vui lòng nạp thêm để đọc truyện");
            }
        }

        [HttpPost]
        [Route("createReview")]
        [Authorize(Policy = "User")]
        public IActionResult createReview([FromBody] ReviewDTO reviewDTO)
        {
            var authHeader = HttpContext.Request.Headers["Authorization"].FirstOrDefault();
            var token = authHeader.Substring("Bearer ".Length).Trim();

            var handler = new JwtSecurityTokenHandler();
            var jwtToken = handler.ReadJwtToken(token);

            // Lấy thông tin từ JWT
            var email = jwtToken.Claims.FirstOrDefault(claim => claim.Type == JwtRegisteredClaimNames.Email)?.Value;
            Account account = context.Accounts.FirstOrDefault(n => n.Equals(email));
            Review review = new Review()
            {
                Content = reviewDTO.content,
                CreatedDate = DateTime.Now,
                Story = context.Stories.FirstOrDefault(n => n.Id == reviewDTO.storyID)
            };
            context.Add(review);
            context.SaveChanges();
            return Ok("Create Review Successfully!");
        }

        [HttpPost]
        [Route("addStory")]
        [Authorize(Policy = "User,Admin")]
        public IActionResult createStory([FromBody] StoryCreateRequest request)
        {
            var authHeader = HttpContext.Request.Headers["Authorization"].FirstOrDefault();
            var token = authHeader.Substring("Bearer ".Length).Trim();

            var handler = new JwtSecurityTokenHandler();
            var jwtToken = handler.ReadJwtToken(token);

            // Lấy thông tin từ JWT
            var email = jwtToken.Claims.FirstOrDefault(claim => claim.Type == JwtRegisteredClaimNames.Email)?.Value;
            Account account = context.Accounts.FirstOrDefault(n => n.Equals(email));
            Story story = new Story()
            {
                Title = request.title,
                Description = request.description,
                Category = context.Categories.FirstOrDefault(n => n.Id == request.categoryID),
                CreatedDate = DateTime.Now,
                IsActive = true,
                Status = "Hot",
                Image = Helper.UploadPhoto(request.image.OpenReadStream())
            };
            context.Add(story);
            context.SaveChanges();
            return Ok("Create Story Successfully!");
        }

        [HttpPost]
        [Route("addChapter")]
        [Authorize(Policy = "User,Admin")]
        public IActionResult createChapter([FromBody] ChapterDTO request)
        {
            var authHeader = HttpContext.Request.Headers["Authorization"].FirstOrDefault();
            var token = authHeader.Substring("Bearer ".Length).Trim();

            var handler = new JwtSecurityTokenHandler();
            var jwtToken = handler.ReadJwtToken(token);

            // Lấy thông tin từ JWT
            var email = jwtToken.Claims.FirstOrDefault(claim => claim.Type == JwtRegisteredClaimNames.Email)?.Value;
            Account account = context.Accounts.FirstOrDefault(n => n.Equals(email));
            Chaper chapter = new Chaper()
            {
                Content = request.content,
                Name = request.name,
                Order = request.order,
                Status = true,
                Story = context.Stories.FirstOrDefault(n => n.Id == request.storyID)
            };
            context.Add(chapter);
            context.SaveChanges();
            return Ok("Create Chapter Successfully!");
        }


    }
}
