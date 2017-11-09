using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;

namespace Models
{
	[System.ComponentModel.DataAnnotations.Schema.Table("Subject")]
	public class Subject
    {
        public string Name { get; set; }
		[Key]
        public int Id { get; set; }
    }
}
