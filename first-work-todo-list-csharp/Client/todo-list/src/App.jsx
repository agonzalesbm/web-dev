import { useState, useEffect } from "react";
import ToDoServiceAPI from "./features/todoList/ToDoServiceAPI";

function App() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      ToDoServiceAPI.getTasks()
        .then((response) => {
          setTaskList(response.data);
        })
        .catch((error) => console.log(error));
    }
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Task List</h1>
        {taskList.map((task) => (
          <p key={task.Id}>{task.NameTask}</p>
        ))}
      </div>
    </>
  );
}

export default App;
