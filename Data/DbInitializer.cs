using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore;
using WideWorld.Models;

namespace WideWorld.Data
{
    public class DbInitializer
    {
        public static void Initialize(WideWorldContext context)
        {
            context.Database.EnsureCreated();

            string insertSqlCmd;
            System.IO.StreamReader file;
            // Check for previously populated Countries table
            if (!context.Countries.Any())
            {
                // Insert Countries
                file = new System.IO.StreamReader(".\\Data\\InsertCountries.sql");
                while ((insertSqlCmd = file.ReadLine()) != null)
                {
                    context.RawSqlReturn.FromSqlRaw("set identity_insert Application.Countries ON; " + insertSqlCmd + "select 1 as Id;").ToList();
                }
                file.Close();
                context.RawSqlReturn.FromSqlRaw("set identity_insert Application.Countries OFF; select 1 as Id;").ToList();
                context.SaveChanges();
            }

            if (!context.StateProvinces.Any())
            {
                // Insert StateProvinces
                file = new System.IO.StreamReader(".\\Data\\InsertStateProvinces.sql");
                while ((insertSqlCmd = file.ReadLine()) != null)
                {
                    context.RawSqlReturn.FromSqlRaw("set identity_insert Application.StateProvinces ON; " + insertSqlCmd + "select 1 as Id;").ToList();
                }
                file.Close();
                context.RawSqlReturn.FromSqlRaw("set identity_insert Application.StateProvinces OFF; select 1 as Id;").ToList();
                context.SaveChanges();
            }

            if (!context.Cities.Any())
            {
                // Insert Cities
                file = new System.IO.StreamReader(".\\Data\\InsertCities.sql");
                while ((insertSqlCmd = file.ReadLine()) != null)
                {
                    context.RawSqlReturn.FromSqlRaw("set identity_insert Application.Cities ON; " + insertSqlCmd + "select 1 as Id;").ToList();
                }
                file.Close();
                context.RawSqlReturn.FromSqlRaw("set identity_insert Application.Cities OFF; select 1 as Id;").ToList();
                context.SaveChanges();
            }


            if (!context.People.Any())
            {
                // Insert CustomerCategories
                file = new System.IO.StreamReader(".\\Data\\InsertPeople.sql");
                while ((insertSqlCmd = file.ReadLine()) != null)
                {
                    context.RawSqlReturn.FromSqlRaw("set identity_insert Application.People ON; " + insertSqlCmd + "select 1 as Id;").ToList();
                }
                file.Close();
                context.RawSqlReturn.FromSqlRaw("set identity_insert Application.People OFF; select 1 as Id;").ToList();
                context.SaveChanges();
            }

            //Load Users using SQL INSERT commands
            //check for previously populated Users table
            if (!context.Users.Any())
            {
                //Insert Users
                file = new System.IO.StreamReader(".\\Data\\InsertUsers.sql");
                while ((insertSqlCmd = file.ReadLine()) != null)
                {
                    context.RawSqlReturn.FromSqlRaw("set identity_insert Application.Users ON; " + insertSqlCmd + "select 1 as Id;").ToList();
                }
                file.Close();
                context.RawSqlReturn.FromSqlRaw("set identity_insert Application.Users OFF; select 1 as Id;").ToList();
                context.SaveChanges();
            }

            //Load People using SQL INSERT commands
            //check for previously populated People table
            if (!context.People.Any())
            {
                //Insert People
                file = new System.IO.StreamReader(".\\Data\\InsertPeople.sql");
                while ((insertSqlCmd = file.ReadLine()) != null)
                {
                    context.RawSqlReturn.FromSqlRaw("set identity_insert Application.People ON; " + insertSqlCmd + "select 1 as Id;").ToList();
                }
                file.Close();
                context.RawSqlReturn.FromSqlRaw("set identity_insert Application.People OFF; select 1 as Id;").ToList();
                context.SaveChanges();
            }

        }
    }
}
