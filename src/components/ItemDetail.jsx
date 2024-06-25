import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { toast } from 'react-toastify';

export const ItemDetail = ({ producto }) => {
    const { agregarAlCarrito } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);

<<<<<<< HEAD
    // Verificar la URL de la imagen
    console.log('URL de la imagen:', producto.imagen);

=======
>>>>>>> e157e93388cba4f296f31465e794b195546ae6a2
    const handleAgregar = () => {
        const productoConCantidad = { ...producto, cantidad };
        agregarAlCarrito(productoConCantidad);
        toast.success(`Agregaste ${cantidad} ${producto.nombre} al carrito!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <div className="detalle-tarjeta">
            <h2>{producto.nombre}</h2>
            <img src={producto.imagen} alt={producto.nombre} />
            <p>Precio: ${producto.precio}</p>
<<<<<<< HEAD
=======
            <p>{producto.descripcion}</p>
>>>>>>> e157e93388cba4f296f31465e794b195546ae6a2
            <label htmlFor="cantidad">Cantidad:</label>
            <select 
                id="cantidad" 
                value={cantidad} 
                onChange={(e) => setCantidad(Number(e.target.value))}
            >
                {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num}</option>
                ))}
            </select>
            <button onClick={handleAgregar}>Agregar</button>
        </div>
    );
};

export default ItemDetail;
