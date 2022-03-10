import React from "react";
import "./App.scss";
import ApiEndPoint from "./common/ApiEndPoint";
//import Movies from './components/Movies';
//import SearchBox from "./components/SearchBox/SearchBox";
import { ApiKey } from "./common/ApiKey";
import { Route, Routes } from "react-router";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

class App extends React.Component {
  state = {
    search: {
      searchInput: "",
    },
    movies: [],
    error: "",
  };

  componentDidMount = async () => {
    const movieText = "animals";
    const response = await ApiEndPoint.get(
      `?apiKey=${ApiKey}&s=${movieText}&type=movie`
    );

    if (response.data.Response === false) {
      const error = "Sorry, there is an error";
      this.setState({ error });
      return;
    }

    const movies = response.data.Search;
    this.setState({ movies });
    //console.log(response, "000");
  };

  handleOnSearch = (e) => {
    //console.log(e.currentTarget);

    const search = { ...this.state.search };
    search.searchInput = e.currentTarget.value;
    this.setState({ search });
  };

  render() {
    const { search, movies: allMovies } = this.state;
    console.log(search, "000000");

    const movies = search.searchInput
      ? allMovies.filter((movie) =>
          movie.Title.toLowerCase().includes(search.searchInput.toLowerCase())
        )
      : allMovies;

    return (
      <>
        <div className="container">
          <Navbar value={search.searchInput} onSearch={this.handleOnSearch} />
          <Routes>
            <Route
              path="/"
              exact
              element={<Home movies={movies} value={search.searchInput} />}
            />
            <Route path="/movie/:id" exact element={<MovieDetail />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
