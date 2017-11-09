using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;

namespace Models
{
	[System.ComponentModel.DataAnnotations.Schema.Table("Class")]
	public class Class
    {
		[Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public int SchoolId { get; set; }
        public int Seats { get; set; }

       // public virtual School School { get; set; }
    }
}
