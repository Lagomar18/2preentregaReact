import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';


const Carrito = () => {
  const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);

  const confirmarVaciarCarrito = () => {
    sweetAlert({
      title: '¿Deseas vaciar el carrito?',
      icon: 'warning',
      buttons: ['Cancelar', 'Vaciar'],
      dangerMode: true,
    }).then((confirmacion) => {
      if (confirmacion) {
        vaciarCarrito();
        sweetAlert('Carrito vacío', '', 'success');
      }
    });
  };

  return (
    <div className="detalle-tarjeta">
      {carrito.map((prod) => (
        <div key={prod.id}>
          <h1>{prod.nombre}</h1>
          <p>Precio: ${prod.precio}</p>
          <p>Cantidad: {prod.cantidad}</p>
        </div>
      ))}
      {carrito.length > 0 ? (
        <>
          <h2>Total: ${calcularTotal()}</h2>
          <button onClick={confirmarVaciarCarrito}>Vaciar carrito</button>
        </>
      ) : (
        <div>
          <h2>Carrito vacío :/</h2>
          <p>
            ¿Desea continuar comprando?{' '}
            <a href="/">Ir a inicio</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Carrito;
