import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import Search from './components/Search';
import Favourites from './components/Favourites';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
//import Pagination from './components/Pagination'
//import MovieList from './components/MovieList';


class App extends Component {
  
  constructor(){
    
    super();

    this.state = {
      movies: [],
      searchTerm: '',
      totalResults: 0,
      currentPage: 1,
      currentMovie: null,
      imagen: ''
    }

    //api key que me otorga TMDB API
    this.apiKey = '952efbbbd0a974abafd09482ce87393c';

  }

//handleSubmit cuando se envía el formulario en el search
handleSubmit = (e) => {
  e.preventDefault();
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
       .then(data => data.json())
       .then(data => {
        console.log(data);
         this.setState({movies: [...data.results], totalResults: data.total_results})
       }) 
}

//handleChange para capturar cada vez que cambie el valor del input en el search
handleChange = (e) => {
  this.setState({searchTerm: e.target.value})
}

//paginadtor - método para cambiar de páginas que será utilizado en el componente Pagination
nextPage = (pageNumber) => {
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`)
  .then(data => data.json())
  .then(data => {
    //console.log(data);
    this.setState({movies: [...data.results], 
                  currentPage: pageNumber})
  })
}

//para imprimir una sola página por película seleccionada
viewMovieInfo = (id) => {
  const filteredMovie = this.state.movies.filter(movie => movie.id === id);
  const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;
  this.setState({currentMovie: newCurrentMovie}); 
}

//para regresar al Search view
closeMovieInfo = () => {
  this.setState({currentMovie: null});
}
  render(){

      const numberPages = Math.floor(this.state.totalResults / 20);

  return (

    <Fragment>
      
    <Router>
      {/* lo que vaya entre las etiquetas <Router> y <Switch> se incluirà en todos los componentes que tengan ruta */}
      <Header/>

      <main className="container mt-5">  
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/search" 
          render={() => {
            return(
              <Search
                closeMovieInfo={this.closeMovieInfo}
                viewMovieInfo={this.viewMovieInfo}
                currentMovie={this.state.currentMovie}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                movies={this.state.movies}
                
                totalResults={this.state.totalResults}
                pages={numberPages}
                nextPage={this.nextPage}
                currentPage={this.state.currentPage}
              />
            )
          }}
         />
        <Route exact path="/favourites" component={Favourites} />
        <Route exact path="/about-me" component={AboutMe} />
      </Switch>
    </main>
  </Router>

  
  </Fragment>
   );
  }
}

export default App;
