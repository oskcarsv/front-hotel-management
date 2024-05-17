import React from "react";
import '../styles/Content.css'

export const Content = () => {
  return (
    <div>
      <div className="content-container">
        <h1>Welcome to our storage service!</h1>
        <p>
          Discover how our storage service can meet your needs. Here you will find information about our services and how we can assist you.
        </p>

        <h2>Our Storage Services</h2>
        <p>
          We offer a wide range of storage services to meet the needs of businesses and individuals. Our services include:
        </p>
        <ul>
          <li>Short-term and long-term storage</li>
          <li>Storage of perishable and climate-sensitive goods</li>
          <li>Document and file storage</li>
          <li>Packaging and wrapping services</li>
          <li>Secure storage of valuable items</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          If you would like more information about our services or have an inquiry, please feel free to contact us.
        </p>
        <p>
          Phone: (123) 456-7890<br />
          Email: info@storagecompany.com<br />
          Address: Main Street #123, City, Country
        </p>
      </div>
      
      {/* Div adicional 1 con fondo azul */}
      <div className="white-background2">
        <h2>Additional Content 1</h2>
        <p>This is some additional content. You can add more information, images, or anything else you'd like.</p>
      </div>

      {/* Div adicional 2 con fondo blanco */}
      <div className="content-container3">
        <h2>Additional Content 2</h2>
        <p>This is another piece of additional content. Feel free to customize it as needed.</p>
      </div>
    </div>
  );
};
