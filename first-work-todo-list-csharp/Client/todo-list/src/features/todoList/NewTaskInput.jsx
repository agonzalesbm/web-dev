import React from "react";
import { TextField, Box, Stack } from "@mui/material";
import { useState } from "react";
import CreateTaskButton from "./CreateTaskButton";
import toDoServiceAPI from "./toDoServiceAPI";

function NewTaskInput() {
  const [nameInput, setNameInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const boxButtonStyle = {
    marginLeft: "auto",
  };

  const createTask = async () => {
    await toDoServiceAPI
      .saveTask({
        NameTask: nameInput,
        Description: descriptionInput,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <Box>
      <Stack>
        <TextField
          id="nameInput"
          label="Task name"
          variant="standard"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <TextField
          id="descriptionInput"
          label="Task description"
          variant="standard"
          value={descriptionInput}
          onChange={(e) => setDescriptionInput(e.target.value)}
        />
        <Box sx={boxButtonStyle}>
          <CreateTaskButton
            onCreateTaskButtonClick={() => {
              createTask();
              setNameInput("");
              setDescriptionInput("");
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default NewTaskInput;
