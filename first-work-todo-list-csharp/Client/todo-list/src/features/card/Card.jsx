import React from "react";
import { Stack, Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import toDoServiceAPI from "../todoList/toDoServiceAPI";
import EditTaskModal from "../todoList/EditTaskModal";

function Card({ name, description, id }) {
  const cardBorderStyle = {
    border: "2px solid white",
    marginTop: "2.88vh",
    marginButton: "2.88vh",
    textTransform: "none",
    padding: "2.92vh 2.08vw",
  };

  const iconButtonsStyle = {
    marginLeft: "auto",
    marginTop: "1.2vh",
  };

  const infoBoxStyle = {
    padding: "0.92vh 0.08vw",
    marginRight: "1.1vw",
  };

  const deleteTask = async () => {
    toDoServiceAPI
      .deleteTask(id)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <Box sx={cardBorderStyle}>
      <Stack direction="row">
        <Box sx={infoBoxStyle}>
          <Stack spacing={1}>
            <h2>{name}</h2>
            <p>{description}</p>
          </Stack>
        </Box>
        <Box sx={iconButtonsStyle}>
          <IconButton onClick={deleteTask}>
            <DeleteIcon />
          </IconButton>
          <EditTaskModal name={name} description={description} id={id} />
        </Box>
      </Stack>
    </Box>
  );
}

export default Card;
