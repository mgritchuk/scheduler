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
    public class CityController : Controller
    {
		private readonly IDapperManager manager;

		public CityController(IDapperManager manager)
		{
			this.manager = manager;

		}


		// GET: api/values
		[HttpGet]
        public async Task<IActionResult> Get()
        {
			return Json(await manager.GetAllQuery<City>());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
			return Json(manager.GetById<City>(id));
        }

        // POST api/values
        [HttpPost]
        public async Task< IActionResult > Post([FromBody]City city)
        {
			return Json(await manager.Insert(city, x => x.Id ));
        }

        // PUT api/values/5
        [HttpPut]
        public async Task<IActionResult> Put([FromBody]City city)
        {
			await manager.Update(city);
			return Ok();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
			await manager.DeleteById<City>(id);
			return Ok();
        }
    }
}
