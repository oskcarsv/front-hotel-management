import '../styles/Content.css'
import '../styles/Variables.css'
import bannerWelcome from '../../assets/img/banner-welcome.png'

export const Content = () => {
  return (
    <div className='content-container'>
      <section className='welcome'>
        <h1 className='text-title'>Welcome to YouHotel</h1>
        <p className='text-description'>
          The ideal place to find your perfect hotel
        </p>
      </section>

      <div className='welcome-img-container'>
        <img className='welcome-img' src={bannerWelcome} alt='' />
      </div>

      <section className='go-container'>
        <h1 className='text-title'>Go to find YouHotel</h1>
        <div className='go-content'>
          <div className='item'>
            <h2 className='text-sub'>Search</h2>
            <p className='text-description'>
              Find the best hotels in the city you want to visit
            </p>
          </div>

          <div className='item'>
            <h2 className='text-sub'>Choose</h2>
            <p className='text-description'>
              Choose the hotel that best suits your needs
            </p>
          </div>

          <div className='item'>
            <h2 className='text-sub'>Enjoy</h2>
            <p className='text-description'>
              Enjoy your stay in the best hotels
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
