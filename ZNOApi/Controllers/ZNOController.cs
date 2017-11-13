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
			return Json(await manager.GetUniversities(cityId));
		}

		[HttpGet]
		public async Task<IActionResult> GetUniversitySpecialties(int univerId)
		{
			return Json(await manager.GetUniversitySpecialty(univerId));
		}

		[HttpGet]
		public async Task<IActionResult> GetSpecialtySubjects(int specId, int? univerId = null)
		{
			return Json(await manager.GetSpecialtySubjects(specId, univerId));
		}
	}
}
