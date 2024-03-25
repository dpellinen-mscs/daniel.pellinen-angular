using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using WideWorld.Data;
using WideWorld.Models;

namespace WideWorld.Controllers

{
//     [Route("api/StatesApi")]
//     [ApiController]
    [Produces("application/json")]
    [Route("api/StateProvincesApi")]
    public class StateProvincesApiController : ControllerBase
    {
        private readonly WideWorldContext _context;

        public StateProvincesApiController(WideWorldContext context)
        {
            _context = context;
        }

        
        // GET: api/StateProvincesApi/230
        [HttpGet("{countryId}")]
        public async Task<ActionResult> GetStateProvinces(int? countryId)
        {
            List<StateProvinces> states = new List<StateProvinces>();
            if (countryId == null)
            {
                states = await _context.StateProvinces.ToListAsync();
            }
            else
            {
                states = await _context.StateProvinces.Where(s => s.CountryId == countryId).Take(5).ToListAsync();
            }

            return Ok(new {stateProvinces = states});
        }

         // PUT: api/StateProvincesApi/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStateProvince([FromRoute] int id, [FromBody] StateProvinces stateProvince)
        {
            if (!ModelState.IsValid) 
            { 
                return BadRequest(ModelState);
            }
            
            if (id != stateProvince.StateProvinceId)
            {
                return BadRequest();
            }

            _context.Entry(stateProvince).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StateProvincesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/StateProvincesApi
        [HttpPost]
        public async Task<ActionResult<StateProvinces>> PostStateProvinces([FromBody] StateProvinces stateProvince)
        {
            if (!ModelState.IsValid) 
            { 
                return BadRequest(ModelState);
            }

            _context.StateProvinces.Add(stateProvince);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetState", "StatesApi", new { id = stateProvince.StateProvinceId }, stateProvince);
        }


         // DELETE: api/StateProvincesApi/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStateProvince([FromRoute]int id)
        {
            if (!ModelState.IsValid) 
            { 
                return BadRequest(ModelState);
            }

            _context.StateProvinces.Remove(await _context.StateProvinces.FindAsync(id));
            await _context.SaveChangesAsync();

            return Ok(await _context.StateProvinces.FindAsync(id));
        }

        
        private bool StateProvincesExists(int id)
        {
            return _context.StateProvinces.Any(e => e.StateProvinceId == id);
        }


    }
}