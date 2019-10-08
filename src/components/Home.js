import React, { Component, Fragment } from "react";
import MovieList from "./MovieList";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  //cuando el componente se monta entonces realiza el call a la API
  componentDidMount() {
    const consultarAPI = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=952efbbbd0a974abafd09482ce87393c&language=en-US&page=1`
      )
        .then(data => data.json())
        .then(data => {
          console.log(data);
          this.setState({ movies: [...data.results] });
        });
    };

    consultarAPI();
  }

  render() {
    //guardando las películas más popilares de manera local en el localStorage siempre que se renderiza el componente
    localStorage.setItem("movies", JSON.stringify(this.state.movies));

    return (
      <Fragment>
        <h1>Home</h1>
        <MovieList movies={this.state.movies} />
      </Fragment>
    );
  }
}

export default Home;
