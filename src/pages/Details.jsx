import { Container, Card, CardContent, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { actions } from "../actions/animes";
import { getAnimeDetail } from "../api/api";

function AnimeDetails(props) {
  const [data, setData] = useState(props.data);

  useEffect(() => {
    anime();
    console.log("PROPS", props);
    console.log("DATA", data);
  }, []);
  console.log(data);

  const anime = async () => {
    const result = await getAnimeDetail();
    console.log(result);
    setData(result);
  };

  return (
    <Container>
      <Card>
        {/* <CardMedia>
          <img src={props.image} alt="image" />
        </CardMedia> */}
        <CardContent>
          <Typography variant="h4" component="h2">
            {props.mal_id}
          </Typography>
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

const mapStateToProps = (state) => ({
  anime: state.anime,
  animeCode: state.animeCode,
});

const mapDispatchToProps = {
  GetAnimeDetail: () => actions.getAnimeDetail(animeCode),
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimeDetails);
