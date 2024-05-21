import { Navbar } from '../../components/navbars/Navbar'
import { Footer } from '../../components/footer/Footer'

import './eventPage.css'

export const EventPage = () => {
  return (
    <div className='event-container'>
      <Navbar />

      {/* Llamar aquí al componente para listar realizar la estructura de eventos */}

      <Footer />
    </div>
  )
}
