namespace Todo.Exceptions;

public class EmptyTaskException : Exception
{
    public EmptyTaskException()
        : base("Task name, description could not be null or empty")
    {
    }
}
