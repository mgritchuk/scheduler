﻿using Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Interfaces
{
    public interface ISchoolManager : IDapperManager
    {
		Task<IEnumerable<School>> GetSchoolsByCityId(int id);
    }
}
