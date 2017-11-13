using Models;
using Models.DTO;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Interfaces
{
    public interface IZNOManager : IDapperManager
    {
		Task<IEnumerable<PersonSchedule>> GetPersonSchedule(int personId);
		Task<IEnumerable<SchoolSchedule>> GetSchoolSchedule(int schoolId);
		Task<IEnumerable<University>> GetUniversities(int cityId);
		Task<IEnumerable<UniversitySpecialty>> GetUniversitySpecialty(int univerId);
		Task<IEnumerable<SpecialtySubject>> GetSpecialtySubjects(int specId, int? univerId);
	}
}
