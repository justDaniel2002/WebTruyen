using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        public IActionResult getAllStories([FromBody] )
        {
            List<Story> stories = context.Stories.Include(n => n.Category).Include(n => n.Chapers).ToList();
            return Ok(stories);
        }

        [HttpGet]
        [Route("getAllStories")]


    }
}
