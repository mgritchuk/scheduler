using System;
using System.Collections.Generic;
using Dapper;
using Dapper.Contrib.Extensions;

namespace Models
{
	[System.ComponentModel.DataAnnotations.Schema.Table("Branch")]
    public class Branch
    {
		//public Branch()
		//{
		//    Specialty = new HashSet<Specialty>();
		//}
		[Key]
		public int Id { get; set; }
		public string Name { get; set; }
        public string Description { get; set; }

        //public virtual ICollection<Specialty> Specialty { get; set; }
    }
}
