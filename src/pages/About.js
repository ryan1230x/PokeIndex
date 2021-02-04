import { Button, Typography } from '@material-ui/core'
import React from 'react'
import ReturnButton from '../components/ReturnButton'

function About() {
  return (
    <div>
      <ReturnButton />
      <Typography variant="h3">
        About
      </Typography>
      <Typography paragraph>
        This project is a React app that uses the POKEAPI 
      </Typography>
    </div>
  )
}

export default About
