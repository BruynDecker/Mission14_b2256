using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mish13.Data;

// The namespace of the controller
namespace Mish13.Controllers
{
    // The controller attributes, indicating that this is an API controller and the base route for its actions
    [ApiController]
    [Route("[controller]")]
    public class ValuesController : Controller
    {
        // A private instance variable to hold the context for the movie collection database
        private JoelHiltonMovieCollectionContext context;

        // A constructor for the controller that takes the context as a parameter
        public ValuesController(JoelHiltonMovieCollectionContext temp)
        {
            context = temp;
        }

        // The HTTP GET method for the controller, which returns a collection of movies
        public IEnumerable<Movie> Get()
        {
            // Retrieve all movies from the database and return them as an array
            var x = context.Movies.ToArray();
            return x;
        }
    }
}

