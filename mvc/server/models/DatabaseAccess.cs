using Dapper;
using Models;
using MySql.Data.MySqlClient;

namespace DatabaseAccess
{
    class  LoadData
    {   
        static string ConnectionString = @"server=localhost;port=3306;database=mvc_assignment;uid=root;password=1402";

        static public List<string> GetImages(int id){
            List<string> Images;
            using (var Connection = new MySqlConnection(ConnectionString))
            {
                string sql = $"SELECT * FROM ( SELECT images0 AS col FROM mytable where id={id} UNION SELECT images1 AS col FROM mytable where id={id} UNION SELECT images2 AS col FROM mytable where id={id} UNION SELECT images3 AS col FROM mytable where id={id} UNION SELECT images4 AS col FROM mytable where id={id} UNION SELECT images5 AS col FROM mytable where id={id}) mytable WHERE col IS NOT NULL";
                Connection.Open();
                Images = Connection.Query<string>(sql).ToList();
                Connection.Close();
            }
            return Images;
        }
        static public List<ProductModel> GetAll(int page, string brand="", 
            string category="", string price=""){
            
            List<ProductModel> Items;
            using (var Connection = new MySqlConnection(ConnectionString))
            {
                string sql =  $"select * from products {ConvertToQuery.BuildQuery(brand,category,price)} limit {(page-1)*6},6";
                Connection.Open();
                Items = Connection.Query<ProductModel>(sql).ToList();
                Connection.Close();
            }
            foreach(var item in Items){
                item.Images = GetImages(item.Id);
            }
            return Items;
        }

        static public int GetTotalItems(string brand="", 
            string category="", string price=""){
            List<ProductModel> Items;
            using (var Connection = new MySqlConnection(ConnectionString))
            {
                string sql =  $"select * from products {ConvertToQuery.BuildQuery(brand,category,price)}";
                Connection.Open();
                Items = Connection.Query<ProductModel>(sql).ToList();
                Connection.Close();
            }
            return Items.Count;
        }

        static public ResultModel GetResults(int page,string brand="", 
            string category="", string price=""){
                ResultModel Result = new ResultModel();
                Result.products = GetAll(page,brand,category,price);
                Result.total = GetTotalItems(brand,category,price);
                return Result;
        }
    }
}