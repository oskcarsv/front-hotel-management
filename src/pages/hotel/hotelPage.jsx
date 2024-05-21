import { Navbar } from "../../components/navbars/Navbar";
import { Footer } from "../../components/footer/Footer";

import "./hotelPage.css";

export const HotelPage = () => {

  return (
    <div className="hotel-container">
      <Navbar />

      {/* Llamar aquí al componente para listar hoteles*/}

      <Footer />
    </div>
  );
};
