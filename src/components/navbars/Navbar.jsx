import '../styles/Navbar.css'
import '../styles/Variables.css'

export const Navbar = () => {
  let saved = localStorage.getItem('user')

  const handleLogout = () => {
    localStorage.removeItem('user')
    saved = null
    window.location.href = './'
  }

  const isLoginPage = window.location.pathname === '/auth'

  return (
    <nav className='navbar'>
      <div className='tittle-container'>
        <h1 className='text-title-main'>YouHotel</h1>
      </div>

      <div className='buttons-container'>
        {saved == null
          ? (
              isLoginPage
                ? (
                  <a className='button' href='/'>
                    Home
                  </a>
                  )
                : (
                  <a className='button' href='/auth'>
                    Login
                  </a>
                  )
            )
          : (
            <a className='button' href='#' onClick={handleLogout}>
              Exit
            </a>
            )}
      </div>
    </nav>
  )
}
