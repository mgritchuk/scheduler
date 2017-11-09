using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;

namespace Models
{
	[System.ComponentModel.DataAnnotations.Schema.Table("School")]
	public class School
    {
        //public School()
        //{
        //    Class = new HashSet<Class>();
        //    Person = new HashSet<Person>();
        //}
		[Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public int CityId { get; set; }
        public string Address { get; set; }
        public bool IsReserve { get; set; }

        //public virtual ICollection<Class> Class { get; set; }
        //public virtual ICollection<Person> Person { get; set; }
        //public virtual City City { get; set; }
    }
}
