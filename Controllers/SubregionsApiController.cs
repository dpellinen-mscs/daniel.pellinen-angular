// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Http;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;
// using WideWorld.Data;
// using WideWorld.Models;

// namespace WideWorld.Controllers
// {
//     //[Route("api/SubregionsApi")]
//     //[ApiController]
//     [Produces("application/json")]
//     [Route("api/SubregionsApi")]
//     public class SubregionsApiController : Controller
//     {
//         private readonly WideWorldContext _context;

//         public SubregionsApiController(WideWorldContext context)
//         {
//             _context = context;
//         }


//         // GET: api/SubregionsApi
//         [HttpGet]
//         public IEnumerable<Subregions> GetSubregions()
//         {
//             List<string> stringList = new List<string>();
//             stringList = _context.Countries.Select(c => c.Subregion).Distinct().OrderBy(r => 1).ToList();
//             List<Subregions> subregionList = new List<Subregions>();
//             foreach (string s in stringList)
//             {
//                 Subregions r = new Subregions();
//                 r.SubregionName = s;
//                 subregionList.Add(r);
//             }
//             return subregionList;
//         }

//         //// GET: api/SubregionsApi/Americas
//         //[HttpGet("{region}")]
//         //public async Task<ActionResult> GetSubregions([FromRoute] string region)
//         //{
//         //    if (!ModelState.IsValid)
//         //    {
//         //        return BadRequest(ModelState);
//         //    }

//         //    List<string> stringList = new List<string>();
//         //    stringList = await _context.Countries.Select(c => c.Subregion).Distinct().OrderBy(r => 1).ToListAsync();
//         //    List<Subregions> subregionList = new List<Subregions>();
//         //    foreach (string s in stringList)
//         //    {
//         //        Subregions r = new Subregions();
//         //        r.SubregionName = s;
//         //        subregionList.Add(r);
//         //    }

//         //    //if (subregions == null)
//         //    //{
//         //    //    return NotFound();
//         //    //}
//         //    return subregionList;
//         //}


//         [HttpGet("{region}")]
//         public async Task<ActionResult<Subregions>> GetSubregions([FromRoute] string region)
//         {
//             if (!ModelState.IsValid)
//             {
//                 return BadRequest(ModelState);
//             }

//             List<string> stringList = new List<string>();
//             stringList = await _context.Countries.Where(r => r.Region == region).Select(c => c.Subregion).Distinct().OrderBy(r => 1).ToListAsync();
//             List<Subregions> subregionList = new List<Subregions>();
//             foreach (string s in stringList)
//             {
//                 Subregions r = new Subregions();
//                 r.SubregionName = s;
//                 subregionList.Add(r);
//             }
//             if (subregionList == null)
//             {
//                 return NotFound();
//             }

//             return Ok(subregionList);
//         }


//     }
// }
