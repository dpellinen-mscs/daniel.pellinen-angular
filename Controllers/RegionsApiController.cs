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
    [Route("api/[controller]")]
    [ApiController]
    //[Route("api/RegionsApi")]
    //[ApiController]
    // [Produces("application/json")]
    // [Route("api/RegionsApi")]
    public class RegionsApiController : Controller
    {
        private readonly WideWorldContext _context;

        public RegionsApiController(WideWorldContext context)
        {
            _context = context;
        }

        //// GET: api/RegionsApi
        //[HttpGet]
        //public IEnumerable<string> GetRegions()
        //{
        //    List<string> stringList = new List<string>();
        //    stringList =  _context.Countries.Select(c => c.Region).Distinct().OrderBy(r => 1).ToList();
        //    return stringList;
        //}
        // GET: api/RegionsApi
        [HttpGet]
        public async Task<IActionResult> GetRegions()
        {
            List<string> regionList = new List<string>();
            regionList = await _context.Countries.Select(c => c.Region).Distinct().OrderBy(r => 1).ToListAsync();
            return Ok(new { regions = regionList});
        }

        //private bool CountriesExists(int id)
        //{
        //    return _context.Countries.Any(e => e.CountryId == id);
        //}
    }
}
