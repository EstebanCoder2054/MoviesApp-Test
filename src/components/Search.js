import React, {Fragment} from 'react';
//import Error from './Error';
import MovieList from './MovieList';
import Pagination from './Paginaton';
import MovieInfo from './MovieInfo';

function Search(props){
    
    if(props.currentMovie === null){
        return(
            
                <Fragment>
     
                    <h1>Search</h1>
     
                 <form
                     onSubmit={props.handleSubmit}   
                 >
                     <div className="row">
                         <div className="form-group col-md-8">
                             <input
                                 type="text"
                                 className="form-control form-control-lg"
                                 placeholder="Type the name of any movie"
                                 onChange={props.handleChange}
                             />
                         </div>
         
                         <div className="form-group col-md-4">
                             <input
                                 type="submit"
                                 className="btn btn-warning btn-block btn-lg"
                                 value="Buscar"
                             />
                         </div>
         
                     </div>
     
                     {props.totalResults > 20 ? <Pagination pages={props.pages} nextPage={props.nextPage} currentPage={props.currentPage}/> : ''}
     
                     </form>
     
                     <MovieList
                         movies={props.movies}
                         viewMovieInfo={props.viewMovieInfo}            
                     /> 
     
                     
     
                 </Fragment>
             );
        
    }else{
        return(
        <MovieInfo
            currentMovie={props.currentMovie}
            closeMovieInfo={props.closeMovieInfo}
        />
        )
    }

      

        
    }


export default Search;