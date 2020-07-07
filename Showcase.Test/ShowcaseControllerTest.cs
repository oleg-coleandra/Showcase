using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Moq;
using Showcase.Web;
using Showcase.Web.Controllers;
using Showcase.Web.Repositories;
using System.Linq;
using Xunit;

namespace Showcase.Test
{
    public class ShowcaseControllerTest
    {
        [Fact]
        public void GoodJsonCountItemsTest()
        {
            var logger = Mock.Of<ILogger<ShowcaseController>>();
            var optionsMock = new Mock<IOptions<AppSettings>>();
            optionsMock.Setup(ap => ap.Value)
                .Returns(new AppSettings
                {                    
                    ContentJson = $"{System.AppDomain.CurrentDomain.BaseDirectory}\\Resources\\showcaseGood.json"
                });

            var repository = new MovieJsonRepository(optionsMock.Object);
            var sut = new ShowcaseController(logger, repository);

            Assert.Equal(45, sut.Get().Count());
        }

        [Fact]
        public void GoodJsonGetItemByIdTest()
        {
            var logger = Mock.Of<ILogger<ShowcaseController>>();
            var optionsMock = new Mock<IOptions<AppSettings>>();
            optionsMock.Setup(ap => ap.Value)
                .Returns(new AppSettings
                {
                    ContentJson = $"{System.AppDomain.CurrentDomain.BaseDirectory}\\Resources\\showcaseGood.json"
                });

            var repository = new MovieJsonRepository(optionsMock.Object);
            var sut = new ShowcaseController(logger, repository);

            Assert.Equal("66b14d5c58904900b13b404ae29eb7fe", sut.GetMovieById("8ad589013b496d9f013b4c0b684a4a5d").Sum);
        }

        [Fact]
        public void BadJsonCountItemsTest()
        {
            var logger = Mock.Of<ILogger<ShowcaseController>>();
            var optionsMock = new Mock<IOptions<AppSettings>>();
            optionsMock.Setup(ap => ap.Value)
                .Returns(new AppSettings
                {
                    ContentJson = $"{System.AppDomain.CurrentDomain.BaseDirectory}\\Resources\\showcaseBad.json"
                });

            var repository = new MovieJsonRepository(optionsMock.Object);
            var sut = new ShowcaseController(logger, repository);

            Assert.Throws<Newtonsoft.Json.JsonSerializationException>(() => sut.Get());
        }
    }
}