import React from "react";
import { useState, useEffect } from "react";
import toDoServiceAPI from "./toDoServiceAPI";
import NewTaskInput from "./NewTaskInput";
import Card from "../card/Card";
import { Box } from "@mui/material";

function ToDoList() {
  const [taskList, setTaskList] = useState([]);

  const todoListStyle = {
    padding: "2.92vh 5.08vw",
  };

  useEffect(() => {
    async function fetchData() {
      toDoServiceAPI
        .getTasks()
        .then((response) => {
          setTaskList(response.data);
        })
        .catch((error) => console.log(error));
    }
    fetchData();
  }, [taskList]);

  return (
    <>
      <Box sx={todoListStyle}>
        <div>
          <h1>Task List</h1>
          <NewTaskInput />
          {taskList.map((task) => (
              <Card name={task.NameTask} description={task.Description} key={task.Id} id={task.Id}></Card>
          ))}
        </div>
      </Box>
    </>
  );
}

export default ToDoList;
