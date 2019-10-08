import React from "react";

//this component Print each Movie that was given by props in the MovieListComponent
//if the img that the API give us is null we can set a default image
function Movie(props) {
  return (
    <div className="col s12 m6 l3">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          {
          props.image === null ? (
            <img
              src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
              alt="card image"
              style={{ width: "150px", height: "150px" }}
            />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w300${props.image}`}
              alt="card image"
              style={{ width: "150px", height: "150px" }}
            />
          )}
        </div>

        <div className="card-content">
          <p>
            <a href="#" onClick={() => props.viewMovieInfo(props.movieId)}>
              Details
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
