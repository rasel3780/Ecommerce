using Microsoft.AspNetCore.Mvc;

namespace Ecommerce.Controllers
{
    public class AccountAPIController : Controller
    {
        public IActionResult VerifyUser(string userName, string password)
        {
            if(userName=="Rasel" && password=="123456")
            {
                return Ok();
            }
            else
            {
                return Unauthorized(new { Message = "unauth" });
            }
        }
    }
}
