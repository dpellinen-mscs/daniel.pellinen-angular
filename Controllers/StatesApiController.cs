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
// //     [Route("api/StatesApi")]
// //     [ApiController]
//     [Produces("application/json")]
//     [Route("api/StatesApi")]
//     public class StatesApiController : ControllerBase
//     {
//         private readonly WideWorldContext _context;

//         public StatesApiController(WideWorldContext context)
//         {
//             _context = context;
//         }

        
//         // GET: api/StatesApi/5
//         // [HttpGet("{id}")]
//         // public async Task<IActionResult> GetState([FromRoute]int id)
//         // {
//         //    if (!ModelState.IsValid)
//         //    {
//         //     return BadRequest(ModelState);
//         //    }

//         //    var state = await _context.StateProvinces.SingleOrDefaultAsync(m => m.StateProvinceId == id);

//         //     if (state == null)
//         //     {
//         //         return NotFound();
//         //     }

//         //     return Ok(state);
//         // }
//         [HttpGet("{id}")]
//         public async Task<ActionResult<StateProvinces>> GetStateProvinces(int id)
//         {
//             var stateProvinces = await _context.StateProvinces.FindAsync(id);

//             if (stateProvinces == null)
//             {
//                 return NotFound();
//             }

//             return stateProvinces;
//         }


//     }
// }