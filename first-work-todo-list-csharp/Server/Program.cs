
using Todo.Models;
using Todo.Services;

namespace Server;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Configure CORS

        builder.Services.AddCors(options =>
            {
                options.AddDefaultPolicy(
                                policy =>
                                {
                                    policy.WithOrigins("http://localhost:5173").AllowAnyHeader().AllowAnyMethod();
                                });
            });

        // Add services to the container.

        builder.Services.AddControllers();

        builder.Services.AddControllers().AddJsonOptions(options => options.JsonSerializerOptions.PropertyNamingPolicy = null);

        // moongo service
        builder.Services.Configure<TodoListDataBaseSettings>(builder.Configuration.GetSection("MongoDB"));

        builder.Services.AddSingleton<TodoTaskService>();
        // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }


        app.UseHttpsRedirection();

        app.UseCors();

        app.UseAuthorization();


        app.MapControllers();

        app.Run();
    }
}
