import { Typography } from "@material-ui/core";
import React from "react";
import ReturnButton from "../components/ReturnButton";

function Version() {
  return(
    <div>
      <ReturnButton />
      <Typography paragraph>
        This project is on version 1.0.0
      </Typography>
    </div>
  )
}

export default Version