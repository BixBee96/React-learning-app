import { Fab, Paper, TextField } from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";

const FormArea = () => {
  return (
    <div>
      <Paper
        style={{
          margin: "10px 10%",
          padding: "25px 50px",
        }}
      >
        <form>
          <TextField label="Title" fullWidth autoComplete="on" />
          <TextField label="Content" fullWidth multiline rows={4} autoComplete="on" />
          <Fab>
            <AddIcon />
          </Fab>
        </form>
      </Paper>
    </div>
  );
};

export default FormArea;
