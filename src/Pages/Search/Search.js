import {
  Button,
  createTheme,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import * as action from "./action";
import { Grid, Modal } from "@material-ui/core";
import ModalDetailMovie from "../../components/Fragment/DetailMovie/ModalDetailMovie";

const Search = () => {
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [detailMovie, setDetailMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState({});

  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
      // setListTrendingMovie(data.results);
      // setTotalPage(data.total_pages);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
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
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div className="search">
          <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search"
            variant="filled"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            onClick={fetchSearch}
            variant="contained"
            style={{ marginLeft: 10 }}
          >
            <SearchIcon fontSize="large" />
          </Button>
        </div>
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, newValue) => {
            setType(newValue);
            setPage(1);
          }}
          style={{ paddingBottom: 5 }}
          aria-label="disabled tabs example"
        >
          <Tab style={{ width: "50%" }} label="Search Movies" />
          <Tab style={{ width: "50%" }} label="Search TV Series" />
        </Tabs>
      </ThemeProvider>
      <div className="trending">
        <Grid container spacing={4}>
          {content.map((val, idx) => (
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
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
      {/* <Modal open={} onClose={handleClose}>
        <ModalDetailMovie
          data={detailMovie}
          cast={cast}
          trailer={trailer}
          modalOpen={modalOpen}
          handleClose={handleClose}
        />
      </Modal> */}
    </div>
  );
};

export default Search;
