import "./NavBar.css";
import { NavLink } from 'react-router-dom';
import CartWidget from "./CartWidget.js";

function NavBar() {
  return (
	<nav>
<ul>
<li>
  <img src="../logo.png" alt="logo" class="logo"/>
  </li>
  <li><NavLink to='/'>Home</NavLink></li>
  <li><NavLink to='/categoria'>Vestidos</NavLink></li>
  <li><NavLink to='/categoria'>Accesorios</NavLink></li>
  <li class="navRight"><NavLink to='/contacto'>Contacto</NavLink></li>
  <li class="navRight"><NavLink to='/nosotros'>Nosotros</NavLink></li>
  <li class="navCart"><CartWidget /></li>
</ul>
	</nav>
  );
}

export default NavBar;