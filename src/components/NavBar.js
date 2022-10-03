import "./NavBar.css";
import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget.js";

function NavBar() {
  return (
	<nav>
<ul>
<li>
  <img src="../logo.png" alt="logo" className="logo"/>
  </li>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/vestidos'>Vestidos</Link></li>
  <li><Link to='/accesorios'>Accesorios</Link></li>
  <li className="navRight"><Link to='/contacto'>Contacto</Link></li>
  <li className="navRight"><Link to='/nosotros'>Nosotros</Link></li>
  <li className="navCart"><CartWidget /></li>
</ul>
	</nav>
  );
}

export default NavBar;