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
    public class SchoolController : Controller
    {
		private readonly ISchoolManager manager;

		public SchoolController(ISchoolManager manager)
		{
			this.manager = manager;

		}


		
		[HttpGet]
        public async Task<IActionResult> Get()
        {
			return Json(await manager.GetAllQuery<School>());
        }

        
        [HttpGet("{id}")]
        public async Task< IActionResult> Get(int id)
        {
			return Json(await manager.GetById<School>(id));
        }

		[HttpGet]
		public async Task<IActionResult> GetByCityId(int id)
		{
			return Json(await manager.GetSchoolsByCityId(id));
		}
        
        [HttpPost]
        public async Task< IActionResult > Post([FromBody]School School)
        {
			return Json(await manager.Insert(School, x => x.Id ));
        }

        
        [HttpPut("{id}")]
        public async Task<IActionResult> Put([FromBody]School School)
        {
			await manager.Update(School);
			return Ok();
        }

        
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
			await manager.DeleteById<School>(id);
			return Ok();
        }
    }
}
