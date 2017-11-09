using System;
using System.Collections.Generic;
using Dapper.Contrib.Extensions;

namespace Models
{
	[System.ComponentModel.DataAnnotations.Schema.Table("City")]
	public class City
    {
        //public City()
        //{
        //    School = new HashSet<School>();
        //    University = new HashSet<University>();
        //}
		[Key]
        public int Id { get; set; }
        public string Name { get; set; }

        //public virtual ICollection<School> School { get; set; }
        //public virtual ICollection<University> University { get; set; }
    }
}
