import React, { Fragment } from "react";

//component that tells a lil bit about me
function AboutMe() {
  return (
    <Fragment>
      <h1>About Me</h1>
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img
                src={
                  "https://avatars3.githubusercontent.com/u/44297094?s=400&u=ab78110bfd03828b289080b17681442527ad6c4d&v=4"
                }
                style={{ width: 400, height: 390 }}
              />
            </div>
            <div className="card-content">
              <p>
                I am a person who always tries to improve in all aspects, I am
                passionate about programming and web development, the two values
                ​​that best define me are discipline and perseverance, I am
                passionate about programming and web development. So far I
                haven't had the opportunity to work in the web development
                sector, but I have had the great opportunity to carry out some
                personal projects as a hobby and I have also had the opportunity
                to work in development teams with some friends from my
                university, with this team I have had the experience of working
                with the agile work methodology SCRUM. I love sports, in fact, I
                practice karate for 10 years now, this martial art has helped me
                forge my character, my constancy and discipline, I am also a
                lover of role-playing video games, good music and cinema.{" "}
              </p>
            </div>
            <div className="card-action">
              <a
                href="https://github.com/EstebanCoder2054"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/estebanescobar2054/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AboutMe;
