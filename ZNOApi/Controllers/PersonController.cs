using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BLL.Interfaces;
using Models.DTO;
using Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ZNOApi.Controllers
{
	[Route("api/[controller]/[action]")]
	public class PersonController : Controller
    {
		private readonly IPersonManager manager;

		public PersonController(IPersonManager manager)
		{
			this.manager = manager;

		}

		[HttpGet("{id}")]
		public async Task<IActionResult> GetSchoolPupils(int id)
		{
			return Json(await manager.GetSchoolPupils(id));
		}

		[HttpGet("{id}")]
		public async Task<IActionResult> GetSchoolTeachers(int id)
		{
			return Json(await manager.GetSchoolTeachers(id));
		}

		[HttpGet]
        public async Task<IActionResult> Get()
        {
			return Json(await manager.GetAllQuery<Person>());
        }

        
        [HttpGet("{id}")]
        public async Task< IActionResult> Get(int id)
        {
			return Json(await manager.GetById<Person>(id));
        }

        
        [HttpPost]
        public async Task< IActionResult > Post([FromBody]Person Person)
        {
			return Json(await manager.Insert(Person, x => x.Id ));
        }

        
        [HttpPut("{id}")]
        public async Task<IActionResult> Put([FromBody]Person Person)
        {
			await manager.Update(Person);
			return Ok();
        }

        
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
			await manager.DeleteById<Person>(id);
			return Ok();
        }
    }
}
