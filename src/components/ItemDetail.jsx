import React from 'react';

const ItemDetail = ({ producto }) => {
  return (
    <div className="detalle-tarjeta">
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} />
      <p>Precio: ${producto.precio}</p>
      <p>{producto.descripcion}</p>
    </div>
  );
};

export default ItemDetail;

