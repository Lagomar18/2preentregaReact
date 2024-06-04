import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from "../data/productos.json";

export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(undefined);

  useEffect(() => {
    const productoEncontrado = data.find((prod) => prod.id === parseInt(itemId));
    setProducto(productoEncontrado);
  }, [itemId]);

  return (
      <div className="detalle-tarjeta">
        {producto ? (
          <div>
            <h2>{producto.nombre}</h2>
            <img src={producto.imagen} alt={producto.nombre} />
            <p>Precio: ${producto.precio}</p>
            <p> {producto.descripcion}</p>
          </div>
        ) : (
          "Cargando..."
        )}
      </div>
  );
};
