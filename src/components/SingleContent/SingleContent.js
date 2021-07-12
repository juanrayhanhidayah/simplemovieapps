import React from "react";
import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";

const SingleContent = ({ data, handleSelectMovie }) => {
  const { id, poster_path, title, date, media_type, vote_average } = data
  return (
    <div onClick={() => handleSelectMovie(id, media_type)}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster_path ? `${img_300}${poster_path}` : unavailable}
        alt={title}
        width="100%"
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </div>
  );
};

export default SingleContent;
