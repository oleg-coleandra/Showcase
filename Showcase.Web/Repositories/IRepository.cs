using System.Collections.Generic;

namespace Showcase.Web.Repositories
{
    public interface IRepository<TEntity>
    {
        public IEnumerable<TEntity> GetAll();
        public TEntity GetById(string id);
    }
}
