namespace Todo.Models;

public class TodoListDataBaseSettings
{
    public string ConnectionString { get; set; } = null!;
    public string DataBaseName { get; set; } = null!;
    public string CollectionName { get; set; } = null!;

}