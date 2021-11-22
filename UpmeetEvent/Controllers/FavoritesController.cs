using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using UpmeetEvent.Data;
using UpmeetEvent.Models;

namespace UpmeetEvent.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoritesController : ControllerBase
    {
        public ApplicationDbContext context;

        public FavoritesController(ApplicationDbContext _context)
        {
            context = _context;
        }

        //endpoint for all events
        [HttpGet("allFavorites")]
        public List<Favorites> DisplayAllFavoritedEvents()
        {
            //grab current logged in user
            string U = User.FindFirst(ClaimTypes.NameIdentifier).Value;

            return context.eventFavorites.ToList();
        }

        //endpoint to add an event
        [HttpPost("addFavorite")]
        public Favorites addFavorite(int event_Id)
        {
            //grabbed current logged in user
            string U = User.FindFirst(ClaimTypes.NameIdentifier).Value;

            Favorites newFave = new Favorites() { EventId = event_Id, UserId = U };
            this.context.eventFavorites.Add(newFave);
            this.context.SaveChanges();
            return newFave;
        }

        [HttpDelete("deleteFavorite")]
        public Favorites DeleteFavorite(int id)
        {
            //grabbed current logged in user
            string U = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            Favorites result = this.context.eventFavorites.ToList().Find(E => E.EventId == id && E.UserId == U);
            this.context.eventFavorites.Remove(result);
            this.context.SaveChanges();
            return result;
        }
    }
}
