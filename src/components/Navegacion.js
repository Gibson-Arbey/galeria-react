import React from "react";
import { Link } from "react-router-dom";
import Imagen1 from "../img/imagen1.jpg";
import Imagen2 from "../img/imagen2.jpg";
import Imagen3 from "../img/imagen3.jpg";
import Imagen4 from "../img/imagen4.jpg";
import Imagen5 from "../img/imagen5.jpg";
import Imagen6 from "../img/imagen6.jpg";
import Imagen7 from "../img/imagen7.jpg";
import Imagen8 from "../img/imagen8.jpg";
import Imagen9 from "../img/imagen9.jpg";
import Imagen10 from "../img/imagen10.jpg";
import Imagen11 from "../img/imagen11.jpg";
import Imagen12 from "../img/imagen12.jpg";

const imagenes = [
  { id: 1, src: Imagen1 },
  { id: 2, src: Imagen2 },
  { id: 3, src: Imagen3 },
  { id: 4, src: Imagen4 },
  { id: 5, src: Imagen5 },
  { id: 6, src: Imagen6 },
  { id: 7, src: Imagen7 },
  { id: 8, src: Imagen8 },
  { id: 9, src: Imagen9 },
  { id: 10, src: Imagen10 },
  { id: 11, src: Imagen11 },
  { id: 12, src: Imagen12 },
];


  const handleClick = () => {
    window.scrollTo(0, 100); // Hace scroll hacia la parte superior de la página
  };


const Navegacion = () => {
  return (
      <div className="row">
        {imagenes.map((imagen) => (
          <div className="col-sm-6 col-md-4 col-lg-3 padre">
            <Link to={`/Imagen${imagen.id}`} className="links" key={imagen.id} onClick={handleClick}>
              <figure>
                <img src={imagen.src} alt="" className="tamaño-img" />
                <figcaption className="text-center">
                  Imagen {imagen.id}
                </figcaption>
              </figure>
            </Link>
          </div>
        ))}
      </div>
  );
};

export default Navegacion;
