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
    public class BranchController : Controller
    {
		private readonly IDapperManager manager;

		public BranchController(IDapperManager manager)
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
		public async Task< IActionResult> Get(int id)
		{
			return Json(await manager.GetById<Branch>(id));
		}

		// POST api/values
		[HttpPost]
		public async Task<IActionResult> Post([FromBody]Branch Branch)
		{
			return Json(await manager.Insert(Branch, x => x.Id));
		}

		// PUT api/values/5
		[HttpPut]
		public async Task<IActionResult> Put([FromBody]Branch Branch)
		{
			await manager.Update(Branch);
			return Ok();
		}

		// DELETE api/values/5
		[HttpDelete("{id}")]
		public async Task<IActionResult> Delete(int id)
		{
			await manager.DeleteById<Branch>(id);
			return Ok();
		}
	}
}
