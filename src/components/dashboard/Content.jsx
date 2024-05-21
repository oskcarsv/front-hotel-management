import "../styles/Content.css";
import "../styles/Variables.css";
import bannerWelcome from "../../assets/img/banner-welcome.png";

export const Content = () => {
  return (
    <div className="content-container">
      <section className="welcome">
        <h1 className="text-title">Welcome to YouHotel</h1>
        <p className="text-description">
          The ideal place to find your perfect hotel
        </p>
      </section>

      <div className="welcome-img-container">
        <img className="welcome-img" src={bannerWelcome} alt="" />
      </div>

      <section className="go-container">
        <h1 className="text-title">Go to find YouHotel</h1>
        <div className="go-content">
          <h2 className="text-subtitle">
            Find the perfect hotel for you, elegant, comfortable and accessible
          </h2>
        </div>
      </section>
    </div>
  );
};
