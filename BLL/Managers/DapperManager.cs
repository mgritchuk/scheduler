using System;
using System.Collections.Generic;
using System.Text;
using Dapper;
using Models;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Reflection;
using System.Linq;
using Dapper.Contrib.Extensions;
using BLL.Interfaces;

namespace BLL.Managers
{

	public class DapperManager : IDapperManager
    {
		private readonly string _connectionString = "data source=(localdb)\\MSSQLLocalDB;initial catalog=ZNO;integrated security=True;MultipleActiveResultSets=True;";

		public void Dispose() { }

		public async Task<IEnumerable<School>> GetSchools()
		{
			return await GetAllQuery<School>();
		}

		public async Task<IEnumerable<T>> GetEnumerableQuery<T>(string sql, object parameters) where T : class
		{
			using (SqlConnection con = new SqlConnection(_connectionString))
			{
				return await con.QueryAsync<T>(sql, parameters);
			}
		}

		public T GetQuery<T>(string sql, object parameters) where T : class
		{
			using (SqlConnection con = new SqlConnection(_connectionString))
			{
				return con.Query<T>(sql, parameters).FirstOrDefault();
			}
		}

		public async Task<IEnumerable<T>> GetAllQuery<T>() where T : class
		{
			string table = typeof(T).Name;
			//Attribute[] atl = Attribute.GetCustomAttributes(typeof(T));
			//foreach (var attrib in Attribute.GetCustomAttributes(typeof(T)))
			//{
			//	if (attrib.GetType().Name == "TableAttribute")
			//	{
			//		table = (attrib as System.ComponentModel.DataAnnotations.Schema.TableAttribute).Name;
			//	}
			//}
			using (SqlConnection con = new SqlConnection(_connectionString))
			{
				return await con.QueryAsync<T>("select * from " + table + "");
			}
		}

		public async Task<T> GetById<T>(object id) where T : class
		{
			T res = null;
			string table = typeof(T).Name;
			//Attribute[] atl = Attribute.GetCustomAttributes(typeof(T));
			//foreach (var attrib in Attribute.GetCustomAttributes(typeof(T)))
			//{
			//	if (attrib.GetType().Name == "TableAttribute")
			//	{
			//		table = (attrib as System.ComponentModel.DataAnnotations.Schema.TableAttribute).Name;
			//	}
			//}
			using (SqlConnection con = new SqlConnection(_connectionString))
			{
				res = (await con.QueryAsync<T>(@"select *
											from " + table +
											" where Id = @Id", new { Id = id })).FirstOrDefault();
			}
			return res;
		}

		public async Task DeleteById<T>(object id) where T : class
		{
			T res = null;
			string table = typeof(T).Name;
			//Attribute[] atl = Attribute.GetCustomAttributes(typeof(T));
			//foreach (var attrib in Attribute.GetCustomAttributes(typeof(T)))
			//{
			//	if (attrib.GetType().Name == "TableAttribute")
			//	{
			//		table = (attrib as System.ComponentModel.DataAnnotations.Schema.TableAttribute).Name;
			//	}
			//}
			using (SqlConnection con = new SqlConnection(_connectionString))
			{
				await con.ExecuteAsync(@"delete from " + table +
											" where Id = @Id", new { Id = id });
			}

		}

		public async Task<object> Insert<T>(T entity, Func<T, object> id) where T : class
		{
			var dateField = entity.GetType().GetProperty("dt_created");
			if (dateField != null)
			{
				dateField.SetValue(entity, DateTime.UtcNow);
			}

			using (SqlConnection con = new SqlConnection(_connectionString))
			{
				await con.InsertAsync(entity);
			}
			return id(entity);
		}

		public async Task Update<T>(T entity) where T : class
		{
			var dateField = entity.GetType().GetProperty("dt_modified");
			if (dateField != null)
			{
				dateField.SetValue(entity, DateTime.UtcNow);
			}

			using (SqlConnection con = new SqlConnection(_connectionString))
			{
				await con.UpdateAsync(entity);
			}
		}


		public async Task<T> SPQuery<T>(string sql, object parameters) where T : class
		{
			using (SqlConnection con = new SqlConnection(_connectionString))
			{
				try{
					return con.QueryAsync<T>(sql, parameters, commandType: System.Data.CommandType.StoredProcedure).Result.First();
				}
				catch(Exception x)
				{

				}
				return null;
			}
		}

		public async Task<IEnumerable<T>> SPEnumerableQuery<T>(string sql, object parameters) where T : class
		{
			using (SqlConnection con = new SqlConnection(_connectionString))
			{
				try
				{
					return con.QueryAsync<T>(sql, parameters, commandType: System.Data.CommandType.StoredProcedure).Result.ToList();
				}
				catch (Exception x)
				{

				}
				return null;
			}
		}
	}
}
