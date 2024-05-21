import "../styles/Navbar.css";
import "../styles/Variables.css";

export const Navbar = () => {
  var saved = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    saved = null;
    window.location.href = "./";
  };

  return (
    <nav className="navbar">
      <div className="tittle-">
        <h1>YouHotel</h1>
      </div>

      <ul className="navbar-links">
        {saved == null ? (
          <li>
            <a href="/auth">Login</a>
          </li>
        ) : (
          <li>
            <a href="#" onClick={handleLogout}>
              Exit
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};
