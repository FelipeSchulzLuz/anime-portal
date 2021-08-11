import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import React from "react";

function Details(props) {
  return (
    <Container>
      <Card>
        <CardMedia>
          <img src={props.image} alt="image" />
        </CardMedia>
        <CardContent>
          <Typography variant="h4" component="h2">
            {props.title}
          </Typography>
          <Typography variant="h4" component="h4">
            {props.season_year}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Details;
