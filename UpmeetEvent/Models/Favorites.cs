using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace UpmeetEvent.Models
{
    public class Favorites
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Id")]
        public string UserId { get; set; }
        [ForeignKey("Events")]
        public int EventId { get; set; }
        //public string EventTitle { get; set; }
        //public DateTime EventDate { get; set; }
        //public string Location { get; set; }
    }
}
