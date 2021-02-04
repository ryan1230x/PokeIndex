import React from 'react'
import Button from "@material-ui/core/Button";

function ReturnButton() {
  return (
    <Button 
        onClick={() => window.history.back()} 
        color="primary"
      >
        Go Back
      </Button>
  )
}

export default ReturnButton
