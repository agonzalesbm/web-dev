import * as React from "react";
import { Box, IconButton, Stack, TextField, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import toDoServiceAPI from "./toDoServiceAPI";

const UPDATE_TASK = "Update task";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ name, description, id }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [nameInput, setNameInput] = useState(name);
  const [descriptionInput, setDescriptionInput] = useState(description);

  const editTask = async () => {
    toDoServiceAPI
      .updateTask(
        {
          Id: id,
          NameTask: nameInput,
          Description: descriptionInput,
        },
        id
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <EditIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack spacing={2}>
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
            <Button
              onClick={() => {
                editTask();
                handleClose();
              }}
              color="secondary"
              variant="outlined"
            >
              {UPDATE_TASK}
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
