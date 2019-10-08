import React from 'react';
import Movie from './Movie';

//este componente renderiza todo lo que me devuelve el search component
function MovieList(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {

                        props.movies.map((movie, index) => {
                            return(
                                <Movie key={index}
                                       image={movie.poster_path}
                                       viewMovieInfo={props.viewMovieInfo}
                                       movieId={movie.id} 
                                       />
                            )
                        })

                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList;