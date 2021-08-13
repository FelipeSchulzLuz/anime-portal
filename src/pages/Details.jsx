import {
  Container,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { actions } from "../actions/animes";
import { getAnimeDetail } from "../api/api";

function AnimeDetails({ ...state }) {
  const [data, setData] = useState(state);
  const dispatch = useDispatch();

  useEffect(() => {

  }, []);


  const animeDetail = async () => {
    const pathURL = window.location.href.split("/", 5);
    animeDetail(pathURL[4]);
    const result = await getAnimeDetail(pathURL[4]);
    dispatch({
      type: actions.animeDetail(),
      animeCode: result,
    });
    console.log("detail", { ...result });
    setData(result);
  };

  return (
    <Container>
      <Card>
        <CardMedia>
          {/* <img src={state.animeSelected.image_url} alt="image" /> */}
        </CardMedia>
        <CardContent>
          <Typography variant="h4" component="h2">
            {state.mal_id}
          </Typography>
          <Typography variant="h4" component="h2">
            {state.title}
          </Typography>
          <Typography variant="h4" component="h4">
            {state.season_year}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  anime: state.anime,
  animeCode: state.animeCode,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AnimeDetails);
