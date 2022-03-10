import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ApiEndPoint from "../../common/ApiEndPoint";
import { ApiKey } from "../../common/ApiKey";
import './MovieDetail.scss'

const MovieDetail = (props) => {
  const { id } = useParams();
  const [selectedMovie, setselectedMovie] = useState({});

  useEffect(async () => {
    const response = await ApiEndPoint.get(
      `?apiKey=${ApiKey}&i=${id}&plot=full`
    );
    console.log(response.data, "hi id");
    setselectedMovie(response.data);

    return () => {
      setselectedMovie({});
    };
  });

  return (
    <div className="movie-section">
      {Object.keys(selectedMovie).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{selectedMovie.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> : {selectedMovie.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {selectedMovie.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> : {selectedMovie.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i> : {selectedMovie.Year}
              </span>
            </div>
            <div className="movie-plot">{selectedMovie.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{selectedMovie.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{selectedMovie.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{selectedMovie.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{selectedMovie.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{selectedMovie.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
