import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

const cssStyle = {
  fontFamily: "'Libre Caslon Display', serif"
};

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.ImgSrc}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography style={cssStyle} gutterBottom variant="h5" component="h2">
            {props.Title}
          </Typography>
          <Typography
            style={cssStyle}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {props.Description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" style={cssStyle}>
          <Link
            href={props.URL}
            target="_blank"
            color="inherit"
            style={{ textDecoration: "None" }}
          >
            {"Watch"}
          </Link>
        </Button>
        {/* <Button size="small" color="primary" style={cssStyle}>
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  );
}
