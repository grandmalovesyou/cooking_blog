import React from 'react';
import { Link, useParams } from "react-router-dom"

import './comp-styles.css';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';


const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function ActualRecipePage(props) {
  const classes = useStyles();


  return (
    <div id="recipeGrid" key={props.post.fields.slug}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card} id="recipeCard">
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {props.post.fields.title}
              </Typography>
              <Typography variant="subtitle1" id="recipeText" id="recipeText">
              <br></br>
                {props.post.fields.category}
              </Typography>
              <Typography variant="subtitle1" paragraph id="recipeText">
              <br></br>
              Ingredients:
                ""
              </Typography>
              <Typography variant="subtitle1" id="recipeText">
              Method: 
              <br></br>
              {props.post.fields.description}
              </Typography>
            </CardContent>
          </div>
            <CardMedia className={classes.cardMedia} image={props.post.fields.image.fields.file.url} title="" id="pic"/>
        </Card>
      </CardActionArea>
      </div>
  );
}
