using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Interfaces
{
	public interface IDapperManager : IDisposable
	{
		Task<T> GetById<T>(object id, string idColumnName) where T : class;
		T GetQuery<T>(string sql, object parameters) where T : class;
		IEnumerable<T> GetManyQuery<T>(string sql, object parameters) where T : class;
		Task<object> Insert<T>(T entity, Func<T, object> id) where T : class;
		Task Update<T>(T entity) where T : class;
		Task DeleteById<T>(object id, string idColumnName) where T : class;
		Task<IEnumerable<T>> GetAllQuery<T>() where T : class;
		Task<T> SPQuery<T>(string sql, object parameters) where T : class;
		Task<IEnumerable<T>> SPEnumerableQuery<T>(string sql, object parameters) where T : class;
	}
}
