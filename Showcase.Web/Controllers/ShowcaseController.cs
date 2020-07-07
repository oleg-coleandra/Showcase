using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Showcase.Web.Models;
using Showcase.Web.Repositories;
using System.Collections.Generic;
using System.Linq;

namespace Showcase.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ShowcaseController : ControllerBase
    {
        private readonly ILogger<ShowcaseController> _logger;
        private readonly IRepository<MovieDto> _repository;

        public ShowcaseController(ILogger<ShowcaseController> logger, IRepository<MovieDto> repository)
        {
            _logger = logger;
            _repository = repository;
        }

        [HttpGet]
        public IEnumerable<MovieShortDto> Get()
        {
            return _repository.GetAll().Select(p => new MovieShortDto
            {
                Body = p.Body,
                Duration = p.Duration,
                Genres = p.Genres,
                Headline = p.Headline,
                Id = p.Id,
                Rating = p.Rating,
                Synopsis = p.Synopsis
            });
        }

        [HttpGet]
        [Route("getMovieById/{id}")]
        public MovieDto GetMovieById(string id)
        {
            return _repository.GetById(id);            
        }
    }
}
