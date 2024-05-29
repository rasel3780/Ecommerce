using System.Data.SqlClient;
using System.Data;

namespace Ecommerce.Models
{
    public class Account
    {
        public string userName { get; set; }
        public string password { get; set; }
        public string Role { get; set; }


        public static List<Account> ListUsers()
        {
            List<Account> LstUser = new List<Account>();
            DataTable dataTable = new DataTable();  

            string conString = DbConnection.GetDbConString();

            SqlConnection connection = new SqlConnection(conString);
            connection.Open();

            SqlCommand cmd = new SqlCommand();
            cmd.Connection = connection;
            cmd.CommandText = "[dbo].[GetMemebers]";
            cmd.Parameters.Clear();
            //cmd.Parameters.Add(new SqlParameter("@UserName", this.userName));
            //cmd.Parameters.Add(new SqlParameter("Password", this.password));
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.CommandTimeout = 0;

            SqlDataAdapter adapter = new SqlDataAdapter(cmd);
            adapter.Fill(dataTable);
            cmd.Dispose();
            connection.Close();

            if (dataTable.Rows.Count > 0)
            {
                var pData = (from p in dataTable.AsEnumerable()
                             //where p.Field<string>("UserName") == this.userName &&
                             //p.Field<string>("Password") == this.password
                             select new
                             {
                                 UserName = p.Field<string>("UserName"),
                                 Role = p.Field<string>("Password")
                             }).ToList();

                foreach (var obj in pData)
                {
                    Account account = new Account();
                    account.userName = obj.UserName;
                    account.Role = obj.Role;
                    LstUser.Add(account);
                }
            }
            return LstUser;

        }
    }
}
