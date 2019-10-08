import React, { Fragment } from "react";

function MovieInfo(props) {
  //este componente imprime la info de una película en específico que viene como prop de currentMovie
  //if the img thats the API give us is null we can set a default image
  return (
    <Fragment>
      <h1>Movie Info</h1>
      <div className="container">
        <div
          className="row"
          onClick={props.closeMovieInfo}
          style={{ cursor: "pointer", paddingTop: 50 }}
        >
          <i className="fas fa-arrow-left"></i>
          <span style={{ marginLeft: 10 }}>Go Back</span>
        </div>

        <div className="row">
          <div className="col s12 m4">
            
            {props.currentMovie.poster_path === null ? (
              <img
                src={
                  "https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"
                }
                alt="Card image"
                style={{ width: "100%", height: 360 }}
              />
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/w300${props.currentMovie.poster_path}`}
                alt="Card image"
                style={{ width: "100%", height: 360 }}
              />
            )}
          </div>

          <div className="col s12 m8">
            <div className="info-container">
              <h1>{props.currentMovie.title}</h1>
              <p>{props.currentMovie.release_date}</p>
              <p>{props.currentMovie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MovieInfo;
