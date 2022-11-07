import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function BasicCard() {
  return (
    <Card style={{width: "100%"}}>
      <CardContent align="left" >
        <Typography variant="h7" component="div">Company name :- </Typography>
        <Typography variant="h7" component="div">package :- </Typography>
        <Typography variant="h7" component="div">location :-</Typography>
        <Typography variant="h7" component="div">organization :-</Typography>
        <Typography variant="h7" component="div">eligible :-</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}