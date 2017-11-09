using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;

namespace Models
{
	[System.ComponentModel.DataAnnotations.Schema.Table("University")]
	public class University
    {
		[Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public int CityId { get; set; }
        public string Address { get; set; }

        //public virtual City City { get; set; }
    }
}
