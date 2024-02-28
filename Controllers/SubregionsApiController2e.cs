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
    [Route("api/SubregionsApi")]
    [ApiController]
    //[Produces("application/json")]
    //[Route("api/SubregionsApi")]
    public class SubregionsApiController : ControllerBase
    {       
         private readonly WideWorldContext _context;

        public SubregionsApiController(WideWorldContext context)
        {
            _context = context;
        }

        // GET: api/SubregionsApi
        [HttpGet]
        public async Task<ActionResult> GetSubregions([FromQuery] string region)
        {
            List<string> subregionList = new List<string>();
            if (string.IsNullOrEmpty(region))
            {
             subregionList = await _context.Countries.Select(c => c.Subregion).Distinct().OrderBy(r => 1).ToListAsync();
            }
                else
                {
                  subregionList = await _context.Countries.Where(r => r.Region == region).Select(c => c.Subregion).Distinct().OrderBy(r => 1).ToListAsync();
                }

           return Ok(new { subregions = subregionList});
        }
    }
}