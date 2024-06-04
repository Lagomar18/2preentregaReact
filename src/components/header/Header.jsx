
import { NavBar } from './NavBar'
import { Carrito } from './Carrito'
import { Link } from 'react-router-dom'

export const Header = (props) => {

  return (
    <header className="header">
        <Link ><h1>LoremStore</h1></Link>
        <NavBar />
        <Carrito numerito={props.numerito} />
    </header>
  )
}
