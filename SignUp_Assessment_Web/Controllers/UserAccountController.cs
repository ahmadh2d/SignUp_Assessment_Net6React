using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SignUp_Assessment_Web.DTOs.Request;
using SignUp_Assessment_Web.Entities;

namespace SignUp_Assessment_Web.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserAccountController : ControllerBase
    {
        private readonly ILogger<UserAccountController> _logger;
        private readonly UserManager<User> _userManager;
        private readonly IMapper _mapper;

        public UserAccountController(ILogger<UserAccountController> logger,
                                     UserManager<User> userManager,
                                     IMapper mapper)
        {
            _logger = logger;
            _userManager = userManager;
            _mapper = mapper;
        }

        [HttpPost]
        public async Task<ActionResult> RegisterUser(RegisterUserDTO registerUserDTO)
        {
            var user = _mapper.Map<User>(registerUserDTO);
            _logger.LogInformation($"{user.FirstName} - {user.LastName} - {user.Email}");
            
            var result = await _userManager.CreateAsync(user, registerUserDTO.Password);
            if (!result.Succeeded)
            {
                foreach (var error in result.Errors)
                {
                    if (error.Code.Contains("Password"))
                        ModelState.AddModelError("password", error.Description);
                    if (error.Code.Contains("Email"))
                        ModelState.AddModelError("email", error.Description);
                    else
                        ModelState.AddModelError(error.Code, error.Description);
                }

                return BadRequest(ModelState);
            }

            return Ok(true);
        }
    }
}
