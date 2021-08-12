import {
  Container,
  Card,
  // CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getAnimeDetail } from "../api/api";

function Details(props) {
  const [data, setData] = useState(props.data);
  useEffect(() => {
    const animeInfo = fetch(
      getAnimeDetail(props.id).then((data) => console.log(data))
    );
  }, []);
  console.log(data);

  return (
    <Container>
      <Card>
        {/* <CardMedia>
          <img src={props.image} alt="image" />
        </CardMedia> */}
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
