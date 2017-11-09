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
		Task<PersonSchedule> GetPersonSchedule(int personId);
		Task<SchoolSchedule> GetSchoolSchedule(int schoolId);
		Task<IEnumerable<University>> GetUniversities(int cityId);

	}
}
