import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const Post = ({ post }) => {

  return (
    <Card style={{width: "100%"}}>
      <CardContent align="left" >
        <Typography variant="h7" component="div">Company name :-{post.name} </Typography>
        <Typography variant="h7" component="div">package :-{post.package} </Typography>
        <Typography variant="h7" component="div">location :-{post.location}</Typography>
        <Typography variant="h7" component="div">organization :-{post.organization}</Typography>
        <Typography variant="h7" component="div">eligible :-{post.eligible}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
export default Post;