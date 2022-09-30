import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavBar.css"

function NavBar() {
  return (
	<nav>
<ul>
<li>
  <img src="../logo.png" alt="" class="logo"/>
  </li>
  <li><a href="default.asp">Home</a></li>
  <li><a href="news.asp">Diseñadores</a></li>
  <li><a href="contact.asp">Blog</a></li>
  <li class="navRight"><a href="about.asp">Contacto</a></li>
  <li class="navRight"><a href="about.asp">Nosotros</a></li>
</ul>
	</nav>
  );
}

export default NavBar;
