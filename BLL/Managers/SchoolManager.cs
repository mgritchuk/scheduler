using BLL.Interfaces;
using Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Managers
{
    public class SchoolManager: DapperManager, ISchoolManager
    {
		public async Task<IEnumerable<School>> GetSchoolsByCityId(int id)
		{
			return await GetEnumerableQuery<School>("SELECT * FROM School WHERE CityId = @CityID", new { CityID = id });
		}

	}
}
