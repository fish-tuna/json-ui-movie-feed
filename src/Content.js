import React, { useState, useEffect } from "react";
import PopSeries from "./PopSeries";
import PopMovies from "./PopMovies";
import movies from "./movies.png";
import series from "./series.png";

export default function Content() {
  const [seriesSelect, setSeriesSelect] = useState(0);
  const [moviesSelect, setMoviesSelect] = useState(0);

  /*useEffect(() => {
    one = () => {
      setSeriesSelect(1);
      console.log("bruh");
    };
    two = () => {
      setMoviesSelect(1);
      console.log("bruh");
    };
    this.three = () => {
      console.log("bruh");
    };
  }, []);*/
  const one = () => setSeriesSelect(1);
  const two = () => setMoviesSelect(1);

  if (seriesSelect) {
    return (
      <div className="content">
        <PopSeries />
      </div>
    );
  } else if (moviesSelect) {
    return (
      <div className="content">
        <PopMovies />
      </div>
    );
  } else {
    return (
      <div className="content">
        <a href="javascript:void(0);" onClick={one}>
          <img src={series}></img>
          <p>Popular Series</p>
        </a>
        <a href="javascript:void(0);" onClick={two}>
          <img src={movies}></img>
          <p>Popular Movies</p>
        </a>
      </div>
    );
  }
  /*return seriesSelect ? (
    <div className="content">
      <p>testin</p>
    </div>
  ) : (
    <div className="content">
      <a href="javascript:void(0);" onClick={one}>
        <img src={series}></img>
        <p>Popular Series</p>
      </a>
      <a href="javascript:void(0);" onClick={two}>
        <img src={movies}></img>
        <p>Popular Movies</p>
      </a>
    </div>
  );*/
}
