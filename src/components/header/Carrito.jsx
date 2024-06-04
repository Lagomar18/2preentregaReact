
import { CartCheck } from 'react-bootstrap-icons'


export const Carrito = (props) => {



  return (
    <div className="carrito">
        <CartCheck color='rgb(136, 190, 28)' /> {props.numerito}
    </div> 
  )
}