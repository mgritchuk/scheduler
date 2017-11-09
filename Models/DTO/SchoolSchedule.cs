using System;
using System.Collections.Generic;
using System.Text;

namespace Models.DTO
{
    public class SchoolSchedule
    {
		public string SchoolName { get; set; }
		public string SubjectName { get; set; }
		public string ClassName { get; set; }
		public DateTime Date { get; set; }
	}
}
