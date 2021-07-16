import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import React from "react";
import { Grid, Modal } from "@material-ui/core";
import * as action from "./action";
import ModalDetailMovie from "../../components/Fragment/DetailMovie/ModalDetailMovie";

const Series = () => {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [listSeries, setListSeries] = useState([]);
  const [detailMovie, setDetailMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState({});

  const fetchSeries = async () => {
    const { data } = await action.getSeries(page);
    setListSeries(data.results);
    setTotalPage(data.total_pages);
  };

  const handleSelectMovie = async (id, media_type) => {
    const detailMovie = await action.getDetailMovie(id, media_type);
    const castMovie = await action.getCredits(id, media_type);
    const trailer = await action.getTrailer(id, media_type);
    Promise.all([detailMovie, castMovie, trailer]).then(() => {
      setDetailMovie(detailMovie.data);
      setCast(castMovie.data);
      const itemTrailer = trailer.data.results || [];
      if (itemTrailer.length === 0) {
        setTrailer("");
      } else {
        setTrailer(trailer.data.results[0]);
      }
      setModalOpen(true);
    });
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSeries();
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Series Today</span>
      <Grid container spacing={4}>
        {listSeries.map((val, idx) => (
          <Grid item lg={3} md={4} sm={2} key={idx}>
            <SingleContent
              data={val}
              handleSelectMovie={(id, media_type) =>
                handleSelectMovie(id, media_type)
              }
            />
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

export default Series;
