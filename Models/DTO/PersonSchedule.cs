using System;
using System.Collections.Generic;
using System.Text;

namespace Models.DTO
{
    public class PersonSchedule
    {
		public string SchoolName { get; set; }
		public string SubjectName { get; set; }
		public string ClassName { get; set; }
		public DateTime Date { get; set; }
		public double Score { get; set; }
	}
}
