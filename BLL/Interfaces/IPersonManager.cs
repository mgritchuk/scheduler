using Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Interfaces
{
    public interface IPersonManager : IDapperManager
    {
		Task<IEnumerable<Person>> GetSchoolPupils(int schoolId);
		Task<IEnumerable<Person>> GetSchoolTeachers(int schoolId);
	}
}
