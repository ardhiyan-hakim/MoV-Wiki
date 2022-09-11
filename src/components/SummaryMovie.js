import "../styles/layouts/SummaryStyled.css";

function SummaryMovie() {
  return (
    <div className="wrapper">
      <h1>MoV</h1>

      <div className="content-container">
        <div className="content-item">
          <div className="content-desc">
            <p>
              MoV is an application that provides user about detailed
              information of each movie inside it. It helps us by giving us an
              overview of the movie and its cast, crew, release date etc. MoV
              also tells us its critical reviews like IMDB rating, user reviews
              etc.
            </p>
          </div>

          <div className="vertical"></div>

          <div className="content-image"></div>
        </div>
        <div className="content-item">
          <div className="content-image"></div>

          <div className="vertical"></div>

          <div className="content-desc">
            <p>
              MoV is an application that provides user about detailed
              information of each movie inside it as if it's a wikipedia, from
              which you can watch the trailer and read reviews.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryMovie;
