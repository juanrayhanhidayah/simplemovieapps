import React from "react";
import { Paper, Button } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import {
  img_500,
  unavailable,
  unavailableLandscape,
} from "../../../config/config";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Carousel from "../../Carousel/Carousel";
import "./styles.css";

const ModalDetailMovie = ({ data, cast, trailer, modalOpen, handleClose }) => {
  return (
    <Fade in={modalOpen}>
      {data && (
        <Paper>
          <div className="ContentModal">
            <img
              src={
                data.poster_path
                  ? `${img_500}/${data.poster_path}`
                  : unavailable
              }
              alt={data.name || data.title}
              className="ContentModal__portrait"
            />
            <img
              src={
                data.backdrop_path
                  ? `${img_500}/${data.backdrop_path}`
                  : unavailableLandscape
              }
              alt={data.name || data.title}
              className="ContentModal__landscape"
            />
            <div className="ContentModal__about">
              <span className="ContentModal__title">
                {data.name || data.title} (
                {(
                  data.first_air_date ||
                  data.release_date ||
                  "-----"
                ).substring(0, 4)}
                )
              </span>
              {data.tagline && <i className="tagline">{data.tagline}</i>}

              <span className="ContentModal__description">{data.overview}</span>

              <div>
                <Carousel data={cast} />
              </div>
              <Button
                variant="contained"
                startIcon={<YouTubeIcon />}
                color="secondary"
                target="__blank"
                href={`https://www.youtube.com/watch?v=${trailer.key}`}
              >
                Watch the Trailer
              </Button>
            </div>
          </div>
        </Paper>
      )}
    </Fade>
  );
};

export default ModalDetailMovie;
