import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

export const ItemDetail = ( { producto } ) => {

    const { agregarAlCarrito } = useContext(CartContext);

  return (
    <div className="detalle-tarjeta">
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} />
      <p>Precio: ${producto.precio}</p>
      <p>{producto.descripcion}</p>
      <button onClick={() => agregarAlCarrito(producto)}>Agregar</button>
    </div>
  );
};

export default ItemDetail;

