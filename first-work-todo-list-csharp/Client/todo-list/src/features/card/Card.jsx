import React from "react";
import { Stack, Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
//  - Card
//  	- NameTaskLabel
//  	- DescriptionTaskLabel
//  	- EditButton
//  	- DeleteButton
//  	- Status

function Card({ name, description }) {
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
  return (
    <Box sx={cardBorderStyle}>
      <Stack direction="row">
        <Stack spacing={1}>
          <h2>{name}</h2>
          <p>{description}</p>
        </Stack>
        <Box sx={iconButtonsStyle}>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EditIcon />
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
}

export default Card;
