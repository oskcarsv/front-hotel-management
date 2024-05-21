import { Navbar } from '../../components/navbars/Navbar'
import { Footer } from '../../components/footer/Footer'

import './hotelPage.css'

export const InformPage = () => {
  return (
    <div className='inform-container'>
      <Navbar />

      {/* Llamar aquí al componente para generar la factura */}

      <Footer />
    </div>
  )
}
