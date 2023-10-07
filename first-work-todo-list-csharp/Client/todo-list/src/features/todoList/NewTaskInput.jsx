import React from "react";
import { TextField, Box, Stack } from "@mui/material";
import { useState } from "react";
import CreateTaskButton from "./CreateTaskButton";

function NewTaskInput() {
  const [nameInput, setNameInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  const boxButtonStyle = {
    marginLeft: "auto",
  };

  return (
    <Box>
      <Stack>
        <TextField id="nameInput" label="Task name" variant="standard" />
        <TextField
          id="descriptionInput"
          label="Task description"
          variant="standard"
        />
        <Box sx={boxButtonStyle}>
          <CreateTaskButton />
        </Box>
      </Stack>
    </Box>
  );
}

export default NewTaskInput;
