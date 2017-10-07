using SQLite;

namespace TodoApp.Data
{
    public interface ISqLite
    {
        SQLiteConnection GetConnection();
    }
}