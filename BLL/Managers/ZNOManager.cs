using BLL.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using Models.DTO;
using System.Threading.Tasks;
using Models;

namespace BLL.Managers
{
    public class ZNOManager : DapperManager, IZNOManager
    {
		public async Task<IEnumerable< PersonSchedule> > GetPersonSchedule(int personId)
		{
			return await SPEnumerableQuery<PersonSchedule>("spGetPersonSchedule", new { PersonId = personId });
		}

		public async Task<IEnumerable< SchoolSchedule>> GetSchoolSchedule(int schoolId)
		{
			
			return await SPEnumerableQuery<SchoolSchedule>("spGetSchoolSchedule", new { SchoolId = schoolId });
			
		}

		public async Task<IEnumerable<University>> GetUniversities(int cityId)
		{
		
			return await SPEnumerableQuery<University>("spGetUniversities", new { CityId = cityId });
			
		}

		public async Task<IEnumerable<UniversitySpecialty>> GetUniversitySpecialty(int univerId)
		{
			return await SPEnumerableQuery<UniversitySpecialty>("spGetUniversitySpecialties", new { UniversityId = univerId });
		}

		public async Task<IEnumerable<SpecialtySubject>> GetSpecialtySubjects(int specId, int univerId)
		{
			return await SPEnumerableQuery<SpecialtySubject>("spGetSpecialtySubjects", new { SpecialtyId = specId, UniversityId = univerId });
		}
	}
}
