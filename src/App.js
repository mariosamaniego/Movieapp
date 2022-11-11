import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Movie from "./components/Movie";

const MOVIE_API = "https://www.omdbapi.com/?s=pokemon&apikey=b6e9d284";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    fetch(MOVIE_API)
      .then(res => res.json())
      .then(jsonres => {
        setMovies(jsonres.Search);
      });
  }, []);

  const search = searchValue => {
    setLoading(true);
    fetch(
      searchValue !== ""
        ? `https://www.omdbapi.com/?s=${searchValue}&apikey=b6e9d284`
        : `https://www.omdbapi.com/?s=pokemon&apikey=b6e9d284`
    )
      .then(res => res.json())
      .then(jsonres => {
        setMovies(jsonres.Search);
        setLoading(false);
      });
  };
  const handleMovies = movies => {
    return loading ? (
      <span>loading...</span>
    ) : movies !== undefined ? (
      movies.map((movie, index) => <Movie key={index} movie={movie} />)
    ) : (
      <span>There is no movie</span>
    );
  };
  return (
    <div className="container">
      <Header appTitle="MOVIE APP"/>
      <Search search={search} />
      <div className="row">{handleMovies(movies)}</div>
    </div>
  );
};

export default App;
