import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./Movies.scss";

const Movies = ({ movies, value }) => {
  const renderMovies = movies.map((movie, index) => (
    <MovieCard data={movie} key={index} />
  ));
  //console.log(value, "xoxo");
  const searchResult = value ? (
    <h5> {`There are ${renderMovies.length} results match your keyword`} </h5>
  ) : (
    <p></p>
  );

  return (
    <>
      <div className="movies-wrapper">
        <div className="movie-list">
          {searchResult}
          <div className="movie-container">{renderMovies}</div>
        </div>
      </div>
    </>
  );
};

export default Movies;
