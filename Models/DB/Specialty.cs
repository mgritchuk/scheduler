using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;

namespace Models
{
	[System.ComponentModel.DataAnnotations.Schema.Table("Specialty")]
	public class Specialty
    {
        public string Name { get; set; }
        public int BranchId { get; set; }
		[Key]
        public int Id { get; set; }
        public string Description { get; set; }

        //public virtual Branch Branch { get; set; }
    }
}
