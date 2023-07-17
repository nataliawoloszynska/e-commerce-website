import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="main-content-container content-container">
      <div className="landing-page">
        <p className="landing-page-text">WYPRZEDAZ SEZONU DO -70%</p>

        <Link to="/sale" className="landing-page-btn">
          Zobacz więcej
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
