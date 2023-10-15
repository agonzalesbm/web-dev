namespace Todo.Controllers;

using Todo.Services;
using Todo.Models;
using Microsoft.AspNetCore.Mvc;


[ApiController]
[Route("/")]
public class TodoTaskController : ControllerBase
{
    private readonly TodoTaskService _todoTaskService;

    public TodoTaskController(TodoTaskService todoTaskService)
    {
        _todoTaskService = todoTaskService;
    }

    [HttpGet]
    public async Task<List<TodoTask>> GetTasks() => await _todoTaskService.GetTasks();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<TodoTask>> GetTask(string id)
    {
        var todoTask = await _todoTaskService.GetTask(id);
        if (todoTask is null)
        {
            return NotFound();
        }

        return todoTask;
    }

    [HttpPost]
    public async Task<IActionResult> CreateTask(TodoTask todoTask)
    {
        await _todoTaskService.CreateTask(todoTask);
        return CreatedAtAction(nameof(GetTask), new { id = todoTask.Id }, todoTask);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> UpdateTask(TodoTask updateTodoTask, string id)
    {
        var todoTask = await _todoTaskService.GetTask(id);
        if (todoTask is null)
        {
            return NotFound();
        }

        await _todoTaskService.UpdateTask(updateTodoTask, id);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> DelteTask(string id)
    {
        var todoTask = await _todoTaskService.GetTask(id);
        if (todoTask is null)
        {
            return NotFound();
        }

        await _todoTaskService.RemoveTask(id);

        return NoContent();
    }
}
