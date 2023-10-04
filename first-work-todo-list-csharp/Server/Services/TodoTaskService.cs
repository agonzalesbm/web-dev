namespace Todo.Services;

using Todo.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

public class TodoTaskService
{
    private readonly IMongoCollection<TodoTask> _tasksCollection;

    public TodoTaskService(IOptions<TodoListDataBaseSettings> todoListDataBaseSettings)
    {
        var mongoClient = new MongoClient(todoListDataBaseSettings.Value.ConnectionString);
        var mongoDataBase = mongoClient.GetDatabase(todoListDataBaseSettings.Value.DataBaseName);
        _tasksCollection = mongoDataBase.GetCollection<TodoTask>(todoListDataBaseSettings.Value.CollectionName);
    }

    public async Task<List<TodoTask>> GetTasks() => await _tasksCollection.Find(_ => true).ToListAsync();

    public async Task<TodoTask?> GetTask(string id) => await _tasksCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateTask(TodoTask todoTask) => await _tasksCollection.InsertOneAsync(todoTask);

    public async Task UpdateTask(TodoTask todoTask, string id) => await _tasksCollection.ReplaceOneAsync(x => x.Id == id, todoTask);

    public async Task RemoveTask(string id) => await _tasksCollection.DeleteOneAsync(x => x.Id == id);
}