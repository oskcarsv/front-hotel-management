import "../styles/Navbar.css";

export const Navbar = () => {
  var saved = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem('user');
    saved = null;
    window.location.href = './'
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo imgNav">
        <div className="imgNav"></div>
      </div>
      <ul className="navbar-links">
        {
         saved == null? (<li><a href="/auth">Loguear aqui</a></li>):(<li><a href="#" onClick={handleLogout}>Salir</a></li>)

        }
        {/* <li><a href="/auth">Loguear aqui</a></li>
        <li><a href="#">Acceder</a></li> */}
      </ul>
    </nav>
  );
};
