import React from "react";
import { Badge, Button } from "@material-ui/core";
import { img_300, unavailable } from "../../config/config";
import { useState, useEffect, useContext } from "react";
import "./SingleContent.css";

const SingleContent = ({ data, handleSelectMovie, cart, setCart, handlePrice }) => {
  const { id, poster_path, title, name, media_type, vote_average, } = data;

  return (
    <div>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster_path ? `${img_300}${poster_path}` : unavailable}
        alt={title}
        width="100%"
        onClick={() => handleSelectMovie(id, media_type)}
        style={{ cursor: "pointer" }}
      />
      <div className="identity">
        <b className="title" style={{ color: "wheat" }}>
          {title}
          {name}
        </b>
        <b className="price" style={{ color: "green", alignContent: "right" }}>
          | IDR.{handlePrice}
        </b>
      </div>
      {/* <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span> */}
    </div>
  );
};

export default SingleContent;
