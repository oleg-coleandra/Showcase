using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Showcase.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;


namespace Showcase.Web.Repositories
{
    public class MovieJsonRepository : IRepository<MovieDto>
    {
        private readonly string json;

        public MovieJsonRepository(IOptions<AppSettings> settingsOptions)
        {
            using (var wc = new WebClient())
            {
                this.json = wc.DownloadString(new Uri(settingsOptions.Value.ContentJson));
            }
        }

        public IEnumerable<MovieDto> GetAll()
        {
            return JsonConvert.DeserializeObject<IEnumerable<MovieDto>>(this.json);
        }

        public MovieDto GetById(string id)
        {
            return JsonConvert.DeserializeObject<IEnumerable<MovieDto>>(json).Where(p => p.Id == id).Single();
        }
    }
}
