using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WideWorld.Data;
using WideWorld.Models;

namespace WideWorld.Controllers
{
    [Produces("application/json")]
    [Route("api/UsersApi")]

    public class UserApiController : Controller
    {
        private readonly WideWorldContext _context;

        public UserApiController(WideWorldContext context)
        {
            _context = context;
        }

        //GET: api/UserSApi/LastName
        [HttpGet("{lastName}")]
        public async Task<IActionResult> GetUser([FromRoute] string lastName)
        {
            List<Users> users = new List<Users>();
            if (String.IsNullOrEmpty(lastName))
            {
                users = await _context.Users.ToListAsync();
            } else
            {
                users = await _context.Users.Where(u => u.LastName == lastName).ToListAsync();
            }

            return Ok(new{users = users});

        }
    }
}