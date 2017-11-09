using Dapper.Contrib.Extensions;
using System;
using System.Collections.Generic;

namespace Models
{
	[System.ComponentModel.DataAnnotations.Schema.Table("Role")]
	public class Role
    {
        public string Name { get; set; }
		[Key]
        public int Id { get; set; }
    }
}
