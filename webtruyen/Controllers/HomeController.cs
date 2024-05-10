using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.IdentityModel.Tokens.Jwt;
using webtruyen.DTO;
using webtruyen.Model;

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

        [HttpGet]
        [Route("getAllStories")]
        public IActionResult getAllStories([FromBody] StoryRequest storyRequest)
        {
            List<Story> stories = context.Stories.Include(n => n.Category).Include(n => n.Chapers).Where(n => n.IsActive).ToList();
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
            Story story = context.Stories.Include(n => n.Category).Include(n => n.Chapers).FirstOrDefault(n => n.Id == id);
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
            if (chaper != null)
            {
                return Ok(chaper);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpGet]
        [Route("history")]
        [Authorize]
        public IActionResult getHistory(int id)
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
    }
}
