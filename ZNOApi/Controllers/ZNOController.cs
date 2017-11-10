using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BLL.Interfaces;
using Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ZNOApi.Controllers
{
    [Route("api/[controller]/[action]")]
    public class ZNOController : Controller
    {
		private readonly IZNOManager manager;

		public ZNOController(IZNOManager manager)
		{
			this.manager = manager;

		}

		[HttpGet]
		public async Task<IActionResult> GetPersonSchedule(int personId)
		{
			return Json(await manager.GetPersonSchedule(personId));
		}

		[HttpGet]
		public async Task<IActionResult> GetSchoolSchedule(int schoolId)
		{
			return Json(await manager.GetSchoolSchedule(schoolId));
		}

		[HttpGet]
		public async Task<IActionResult> GetUniversities(int cityId)
		{
			return Json( await manager.GetUniversities(cityId));
		}

		// GET: api/values
		[HttpGet]
        public async Task< IActionResult > GetSchool()
        {
			var x = Json(await manager.GetAllQuery<School>());
			return Json(new string[] { "value1", "value2" });
			
			//
		}

		[HttpGet]
		public IEnumerable<string> GetStudent()
		{
			return new string[] { "value1", "value2" };
		}

		// GET api/values/5
		[HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put([FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
