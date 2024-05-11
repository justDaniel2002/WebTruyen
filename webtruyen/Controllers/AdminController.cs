using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webtruyen.DTO;
using webtruyen.Model;

namespace webtruyen.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "ADMIN")]
    public class AdminController : ControllerBase
    {
        private WebtruyenContext context;

        public AdminController()
        {
            this.context = new WebtruyenContext();
        }

        [HttpPost]
        [Route("getListAccounts")]
        public IActionResult getListAccount([FromBody] AccountRequestDTO request)
        {
            List<Account> accounts = context.Accounts.Include(n => n.Role).ToList();
            if(request != null)
            {
                if(request.searchValue != null)
                {
                    accounts = accounts.Where(n => n.Email.Contains(request.searchValue)).ToList();
                }
                if(request.balance != null)
                {
                    accounts = accounts.Where(n => n.AccountBalance > request.balance.Value).ToList();
                }
                if(request.isActive != null)
                {
                    accounts = accounts.Where(n => n.IsActive == request.isActive).ToList();
                }
                if(request.roleID != null)
                {
                    accounts = accounts.Where(n => n.RoleId == request.roleID).ToList();
                }    
            }
            return Ok(accounts);
        }

        [HttpGet]
        [Route("deleteAccounts")]
        public IActionResult deleteAccount(int accountID)
        {
            Account account = context.Accounts.FirstOrDefault(n => n.Id == accountID);
            account.IsDelete = true;
            context.SaveChanges();
            return Ok();
        }
    }
}
