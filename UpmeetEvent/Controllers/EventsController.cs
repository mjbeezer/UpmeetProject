using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UpmeetEvent.Data;
using UpmeetEvent.Models;
using System.Security.Claims;

namespace UpmeetEvent.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {
        public ApplicationDbContext context;

        public EventsController(ApplicationDbContext _context)
        {
            context = _context;
        }

        //list of default events
        public List<Event> events = new List<Event>()
        {
        new Event()
        {
            Title = "The New Beatles",
            Description = "A night of old classics, new hits and long hair.",
            Category = "Concert",
            Labels = "Live Music,Rock and Roll",
            //specifying the year, month, day, hour, minute, and second.
            EventDate = new DateTime (2021, 11, 29, 18, 0, 0),
            Location = "Detroit, MI"
        },
        new Event()
        {
            Title = "Detroit Red Wings vs Toronto Maple Leafs",
            Description = "An original six matchup between the Detroit Red Wings and Toronto Mapleleafs.",
            Category = "Sporting Event",
            Labels = "Live Sports,Hockey",
            //specifying the year, month, day, hour, minute, and second.
            EventDate = new DateTime (2021, 11, 30, 19, 30, 0),
            Location = "Detroit, MI"
        },
        new Event()
        {
            Title = "Detroit Lions vs Chicago Bears",
            Description = "Watch the Lions take on the Bears in Motown.",
            Category = "Sporting Event",
            Labels = "Live Sports,Football",
            //specifying the year, month, day, hour, minute, and second.
            EventDate = new DateTime (2021, 12, 04, 15, 0 , 0),
            Location = "Detroit, MI"
        },
        new Event()
        {
            Title = "The Hip Hop Nutcracker",
            Description = "What do you get when you combine the elegant holiday score of Tchaikovsky's Nutcracker and a DJ with pin-sharp contemporary hip hop dance? This hit show mashes up two very American icons into a stunning production.",
            Category = "Concert",
            Labels = "Contemporary,Stage Performance",
            //specifying the year, month, day, hour, minute, and second.
            EventDate = new DateTime (2021, 12, 05, 17, 30, 0),
            Location = "Detroit, MI"
        },
        new Event()
        {
            Title = "Khruangbin",
            Description = "Check out night one of the Texas trio's first concert in Detroit.",
            Category = "Concert",
            Labels = "Live Music,Rock and Roll",
            //specifying the year, month, day, hour, minute, and second.
            EventDate = new DateTime (2021, 12, 09, 19, 30, 0),
            Location = "Detroit, MI"
        },
        new Event()
        {
            Title = "Khruangbin",
            Description = "Check out night two of the Texas trio's first concert in Detroit.",
            Category = "Concert",
            Labels = "Live Music,Rock and Roll",
            //specifying the year, month, day, hour, minute, and second.
            EventDate = new DateTime (2021, 12, 10, 19, 30, 0),
            Location = "Detroit, MI"
        },
        new Event()
        {
            Title = "Detroit Pistons vs Brooklyn Nets",
            Description = "Catch Cade Cunningham and the Pistons take on James Harden and the Nets.",
            Category = "Sporting Event",
            Labels = "Live Sports,Basketball",
            //specifying the year, month, day, hour, minute, and second.
            EventDate = new DateTime (2021, 12, 12, 19, 0, 0),
            Location = "Detroit, MI"
        },
        new Event()
        {
            Title = "Detroit Red Wings vs New York Islanders",
            Description = "Watch Dylan Larkin and the Red Wings take on the Islanders.",
            Category = "Sporting Event",
            Labels = "Live Sports,Hockey",
            //specifying the year, month, day, hour, minute, and second.
            EventDate = new DateTime (2021, 12, 14, 19, 30, 0),
            Location = "Detroit, MI"
        }
        };

        //endpoint for all events
        [HttpGet("allEvents")]
        public List<Event> DisplayAllEvents()
        {
            //context.allEvents.AddRange(events);
            //context.SaveChanges();
            return context.allEvents.ToList();
        }

        //endpoint to add an event
        [HttpPost("addEvent")]
        public Event addEvent(string title, string description, string category, string labels, DateTime eventdate, string location)
        {
            //add authorization to front end for loggen in users to add events
            Event newEvent = new Event() { Title = title, Description = description, Category = category, Labels = labels, EventDate = eventdate, Location = location };
            this.context.allEvents.Add(newEvent);
            this.context.SaveChanges();
            return newEvent;
        }

        [HttpGet("allEvents/{id}")]
        public Event getEventById(int id)
        {
            return context.allEvents.Find(id);
        }

    }
}
