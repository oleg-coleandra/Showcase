using Newtonsoft.Json;

namespace Showcase.Web.Models
{
    public class MovieDto
    {
        public string Body { get; set; }
        public Image[] CardImages { get; set; }
        public Person[] Cast { get; set; }
        public string Cert { get; set; }
        [JsonProperty("class")]
        public string ItemClass { get; set; }
        public Person[] Directors { get; set; }
        public int Duration { get; set; }
        public string[] Genres { get; set; }
        public string Headline { get; set; }
        public string Id { get; set; }
        public Image[] KeyArtImages { get; set; }
        public string LastUpdated { get; set; }
        public string Quote { get; set; }
        public int Rating { get; set; }
        public string ReviewAuthor { get; set; }
        public string SkyGoId { get; set; }
        public string SkyGoUrl { get; set; }
        public string Sum { get; set; }
        public string Synopsis { get; set; }
        public string Url { get; set; }
        public Video[] Videos { get; set; }
        public ViewingWindow ViewingWindow { get; set; }
        public string Year { get; set; }
        public Gallery[] Galleries { get; set; }
        public string Sgid { get; set; }
        public string SgUrl { get; set; }
    }

    public class ViewingWindow
    {
        public string StartDate { get; set; }
        public string WayToWatch { get; set; }
        public string EndDate { get; set; }
        public string Title { get; set; }
    }

    public class Image
    {
        public string Url { get; set; }
        [JsonProperty("h")]
        public int Height { get; set; }
        [JsonProperty("w")]
        public int Width { get; set; }
    }

    public class Person
    {
        public string Name { get; set; }
    }

    public class Video
    {
        public string Title { get; set; }
        public Alternative[] Alternatives { get; set; }
        public string Type { get; set; }
        public string Url { get; set; }
        public string ThumbnailUrl { get; set; }
    }

    public class Alternative
    {
        public string Quality { get; set; }
        public string Url { get; set; }
    }

    public class Gallery
    {
        public string Title { get; set; }
        public string Url { get; set; }
        public string Id { get; set; }
        public string ThumbnailUrl { get; set; }
    }
}