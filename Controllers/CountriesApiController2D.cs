﻿using System;
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
    [Route("api/CountriesApi")]
    [ApiController]
    //[Produces("application/json")]
    //[Route("api/SubregionsApi")]
    public class CountriesApiController : ControllerBase
    {
        private readonly WideWorldContext _context;

        public CountriesApiController(WideWorldContext context)
        {
            _context = context;
        }

        // GET: api/CountriesApi
        // [HttpGet]
        // public async Task<ActionResult<IEnumerable<Countries>>> GetCountries()
        // {
        //     return await _context.Countries.ToListAsync();
        // }

                // GET: api/CountriesApi
        [HttpGet]
        public async Task<ActionResult> GetCountries([FromQuery] string subregion)
        {
            List<Countries> countries = new List<Countries>();
            if (string.IsNullOrEmpty(subregion))
            {
                countries = await _context.Countries.ToListAsync();
            }
                else
                {
                    countries = await _context.Countries.Where(c => c.Subregion == subregion).ToListAsync();
                }
                
            // return Ok(countries);
           // return Ok(new { d = countries});
           return Ok(new { countries = countries});
        }

        // GET: api/CountriesApi/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Countries>> GetCountries(int id)
        {
            var countries = await _context.Countries.FindAsync(id);

            if (countries == null)
            {
                return NotFound();
            }

            return countries;
        }

        // PUT: api/CountriesApi/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCountries(int id, Countries countries)
        {
            if (id != countries.CountryId)
            {
                return BadRequest();
            }

            _context.Entry(countries).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CountriesExists(id))
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

        // POST: api/CountriesApi
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Countries>> PostCountries(Countries countries)
        {
            _context.Countries.Add(countries);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCountries", new { id = countries.CountryId }, countries);
        }

        // DELETE: api/CountriesApi/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCountries(int id)
        {
            var countries = await _context.Countries.FindAsync(id);
            if (countries == null)
            {
                return NotFound();
            }

            _context.Countries.Remove(countries);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CountriesExists(int id)
        {
            return _context.Countries.Any(e => e.CountryId == id);
        }
    }
}
