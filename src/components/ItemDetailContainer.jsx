import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from "../data/productos.json";
import ItemDetail from './ItemDetail';

export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [producto, setProducto] = useState(undefined);

  useEffect(() => {
    const productoEncontrado = data.find((prod) => prod.id === parseInt(itemId));
    setProducto(productoEncontrado);
  }, [itemId]);

  return (
    producto ? <ItemDetail producto={producto} /> : "Cargando..."
  );
};
