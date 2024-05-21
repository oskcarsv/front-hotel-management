import "../styles/Content.css";

export const Content = () => {
  return (
    <div className="content-container">
      <section className="welcome">
        <h1 className="welcome-text-title">Welcome to YouHotel</h1>
        <p className="welcome-text-description">
          The ideal place to find your perfect hotel{" "}
        </p>
      </section>

      <div>
        <img src="" alt="" />
      </div>

      <section className="go">
        <h1 className="go-text-title">Go to find YouHotel</h1>
        <a href="">Start</a>
      </section>

    </div>
  );
};
