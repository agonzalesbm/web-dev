using Microsoft.AspNetCore.Mvc;
using Todo.Models;
using Todo.Services;

namespace mvc_project.Controllers
{
    public class TodoTaskController : Controller
    {
        private readonly TodoTaskService _context;

        public TodoTaskController(TodoTaskService context)
        {
            _context = context;
        }

        // GET: TodoTask
        public async Task<IActionResult> Index()
        {
            return _context != null ?
                        View(await _context.GetTasks()) :
                        Problem("Entity set 'todolist.TodoTask'  is null.");
        }

        // GET: TodoTask/Details/5
        public async Task<IActionResult> Details(string id)
        {
            if (id == null || _context == null)
            {
                return NotFound();
            }

            var todoTask = await _context.GetTask(id);
            if (todoTask == null)
            {
                return NotFound();
            }

            return View(todoTask);
        }

        // GET: TodoTask/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: TodoTask/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,NameTask,Description")] TodoTask todoTask)
        {
            if (ModelState.IsValid)
            {
                await _context.CreateTask(todoTask);
                return RedirectToAction(nameof(Index));
            }
            return View(todoTask);
        }

        // GET: TodoTask/Edit/5
        public async Task<IActionResult> Edit(string id)
        {
            if (id == null || _context == null)
            {
                return NotFound();
            }

            var todoTask = await _context.GetTask(id);
            if (todoTask == null)
            {
                return NotFound();
            }
            return View(todoTask);
        }

        // POST: TodoTask/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(string id, [Bind("Id,NameTask,Description")] TodoTask todoTask)
        {
            if (id != todoTask.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                await _context.UpdateTask(todoTask, id);
                return RedirectToAction(nameof(Index));
            }
            return View(todoTask);
        }

        // GET: TodoTask/Delete/5
        public async Task<IActionResult> Delete(string id)
        {
            if (id == null || _context == null)
            {
                return NotFound();
            }

            await _context.RemoveTask(id);

            return RedirectToAction(nameof(Index));
        }

        // POST: TodoTask/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(string id)
        {
            if (_context == null)
            {
                return Problem("Entity set 'todolist.TodoTask'  is null.");
            }
            var todoTask = await _context.GetTask(id);
            if (todoTask != null)
            {
                await _context.RemoveTask(id);
            }

            return RedirectToAction(nameof(Index));
        }
    }
}
