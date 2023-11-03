using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Todo.Models;

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
