import React, { useEffect, useState } from 'react';
import data from "../data/productos.json";
import categories from "../data/categorias.json";
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

  let { categoryId } = useParams();
  let [productos, setProductos] = useState([]);

  let [titulo, setTitulo] = useState("Productos");
  
  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    })
  }

  useEffect(() => {
    
    pedirProductos()
      .then((res) => {
        if (categoryId) {
          setTitulo(categories.find((cat) => cat.id === categoryId).nombre);
          setProductos(res.filter((prod) => prod.categoria.id === categoryId));
          
        } else {
          setTitulo("Productos");
          setProductos(res);
        }
      })
      
  }, [categoryId]);
  

  return (
    <>
    <section className='background-image'>
      <div className="item-list-container">
      <h1>{titulo}</h1>
      <ItemList productos={productos} />
    </div>
    </section>
    </>
  )
}