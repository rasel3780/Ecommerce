using Ecommerce.Models;
using Microsoft.AspNetCore.Mvc;

namespace Ecommerce.Controllers
{
    public class AccountAPIController : Controller
    {
        //http://localhost:58345/AccountAPI/VerifyUser?userName=Rasel&password=123456
        [HttpPost]
        public IActionResult VerifyUser(Account ModelAccount)
        {
            if (ModelAccount.userName == "Rasel" && ModelAccount.password == "123456")
            {
                return Ok("Successfully Authorized");
            }
            else
            {
                return Unauthorized(new { Message = "unauth access" });
            }
        }
    }
}
