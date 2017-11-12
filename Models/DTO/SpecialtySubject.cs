using System;
using System.Collections.Generic;
using System.Text;

namespace Models.DTO
{
    public class SpecialtySubject
    {
		public int Id { get; set; }
		public string Name { get; set; }
		public int? UniversityId { get; set; }
		public string UniversityName { get; set; }
	}
}
