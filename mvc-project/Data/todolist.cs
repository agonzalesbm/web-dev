using Microsoft.EntityFrameworkCore;

namespace todo
{
    public class Todolist : DbContext
    {
        public Todolist(DbContextOptions<Todolist> options)
            : base(options)
        {
        }

        public DbSet<Todo.Models.TodoTask> TodoTask { get; set; } = default!;
    }
}
