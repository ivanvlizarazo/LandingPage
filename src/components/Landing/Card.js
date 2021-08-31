import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
   
    paddingTop: "56.25%", // 16:9
    maxWidth: "100%",
    height: "auto",
    objectFit: "contain",
  },
  cardActions: {
    color: "#EE6B04",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
 

  return (
    <Card className={props.stylesCard ? props.stylesCard : classes.root} elevation={10}>
      {props.image ? (
        <div className={props.stylesMedia?props.stylesMedia:null}>
          <CardMedia className={classes.media} image={props.image} />
        </div>
      ) : null}
      <CardActions className={classes.cardActions}>
        <Grid
          container
          direction="row"
          justifycontent="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
            <Typography variant="h5" component="h2">
              {props.title}
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
