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
    public class ClassController : Controller
    {
		private readonly IDapperManager manager;

		public ClassController(IDapperManager manager)
		{
			this.manager = manager;

		}

		[HttpGet]
		public async Task<IActionResult> Get()
		{
			return Json(await manager.GetAllQuery<Class>());
		}

		// GET api/values/5
		[HttpGet("{id}")]
		public async Task<IActionResult> Get(int id)
		{
			return Json(await manager.GetById<Class>(id));
		}

		// POST api/values
		[HttpPost]
		public async Task<IActionResult> Post([FromBody]Class Class)
		{
			return Json(await manager.Insert(Class, x => x.Id));
		}

		// PUT api/values/5
		[HttpPut]
		public async Task<IActionResult> Put([FromBody]Class Class)
		{
			await manager.Update(Class);
			return Ok();
		}

		// DELETE api/values/5
		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			await manager.DeleteById<Class>(id);
			return Ok();
		}
	}
}
