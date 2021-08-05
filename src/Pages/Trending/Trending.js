import "./Trending.css";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import React from "react";
import { Button, Grid, Modal } from "@material-ui/core";
import * as action from "./action";
import ModalDetailMovie from "../../components/Fragment/DetailMovie/ModalDetailMovie";
import { ExitToAppSharp } from "@material-ui/icons";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [listTrendingMovie, setListTrendingMovie] = useState([]);
  const [detailMovie, setDetailMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState({});
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const fetchTrending = async () => {
    const { data } = await action.getTrendingMovie(page);
    setListTrendingMovie(data.results);
    setTotalPage(data.total_pages);
  };

  const handleSelectMovie = async (id, media_type) => {
    const detailMovie = await action.getDetailMovie(id, media_type);
    const castMovie = await action.getCredits(id, media_type);
    const trailer = await action.getTrailer(id, media_type);
    Promise.all([detailMovie, castMovie, trailer]).then(() => {
      setDetailMovie(detailMovie.data);
      setCast(castMovie.data);
      setTrailer(trailer.data.results[0]);
      setModalOpen(true);
    });
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
  }, [page]);

  const handleAddToCart = (data) => {
    let price;
    if (data.vote_average <= 5) {
      price = 5000;
    } else {
      price = 7500;
    }
    const movie = {
      id: data.id,
      poster_path: data.poster_path,
      title: data.title,
      name: data.name,
      price: price,
      vote_average: data.vote_average,
      qty: 1,
    };
    const exist = cart.find((x) => x.id === data.id);
    // console.log(exist);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === data.id
            ? { ...exist, qty: exist.qty + 1, price: exist.price + movie.price }
            : item
        )
      );
      console.log(cart);
      console.log(exist);
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      const modCart = [...cart, movie];
      setCart(modCart);
      localStorage.setItem("cart", JSON.stringify(modCart));
    }
  };

  const handlePrice = (item) => {
    if (item.vote_average <= 5) {
      return 5000;
    } else {
      return 7500;
    }
  };
  return (
    <div>
      <span className="pageTitle">Trending Today</span>
      <Grid container spacing={4}>
        {listTrendingMovie.map((val, idx) => (
          <Grid item lg={3} md={4} sm={2} key={idx}>
            <SingleContent
              data={val}
              handleSelectMovie={(id, media_type) =>
                handleSelectMovie(id, media_type)
              }
              handlePrice={handlePrice(val)}
              handleAddToCart={(data) => handleAddToCart(data)}
            />
            <Button
              style={{ background: "#080e2c", color: "wheat" }}
              onClick={() => handleAddToCart(val)}
            >
              Add to Cart
            </Button>
          </Grid>
        ))}
      </Grid>
      <CustomPagination setPage={setPage} totalPage={totalPage} />
      <Modal open={modalOpen} onClose={handleClose}>
        <ModalDetailMovie
          data={detailMovie}
          cast={cast}
          trailer={trailer}
          modalOpen={modalOpen}
          handleClose={handleClose}
        />
      </Modal>
    </div>
  );
};

export default Trending;
