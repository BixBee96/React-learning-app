import React from "react";
import { Paper } from "@material-ui/core";

const Header = () => {
  return (
    <div>
      <Paper elevation={3}>
        <img src="https://i.stack.imgur.com/kyKz5.png" alt="React Logo" />
        <h1 className="header-title">React App</h1>
      </Paper>
    </div>
  );
};

export default Header;
