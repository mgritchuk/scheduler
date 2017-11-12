using BLL.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using Models;
using System.Threading.Tasks;

namespace BLL.Managers
{
    public class PersonManager: DapperManager, IPersonManager
    {
		public async Task<IEnumerable<Person>> GetSchoolPupils(int schoolId)
		{
			return await GetEnumerableQuery<Person>(@"SELECT *
				FROM Person
				INNER JOIN PersonRole on PersonRole.PersonId = Person.Id
				WHERE PersonRole.RoleId = 1 AND Person.SchoolId = @SchoolID", new { SchoolID = schoolId });
			
		}

		public async Task<IEnumerable<Person>> GetSchoolTeachers(int schoolId)
		{
			return await GetEnumerableQuery<Person>(@"SELECT *
				FROM Person
				INNER JOIN PersonRole on PersonRole.PersonId = Person.Id
				WHERE PersonRole.RoleId = 2 AND Person.SchoolId = @SchoolID", new { SchoolID = schoolId });
		}
    }
}
