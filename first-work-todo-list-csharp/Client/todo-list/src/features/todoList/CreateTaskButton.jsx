import React from "react";
import { Button } from "@mui/material";

const CREATE_BUTTON = "Add task";

function CreateTaskButton({ onCreateTaskButtonClick }) {
  const buttonStyle = {
    marginTop: "2.88vh",
    marginButton: "2.88vh",
    textTransform: "none",
    padding: "1.92vh 9.08vw",
  };

  return (
    <Button
      variant="outlined"
      color="secondary"
      onClick={onCreateTaskButtonClick}
      style={buttonStyle}
    >
      {CREATE_BUTTON}
    </Button>
  );
}

export default CreateTaskButton;
