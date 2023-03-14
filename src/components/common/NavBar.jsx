import "../../styles/NavBar.css"
import { Link } from "react-router-dom";
import About from "../../components/About/About"
 
const NavBar = () => {
  return (
    <header>
      <article>
        <h1 className="name">YouTube</h1>
      </article>
        <nav className="navbar">
          <ul className="navbarLink">
            <li>
              <Link to="/">Home</Link>
            </li>
           
            <li>
              <Link to="/about" element={< About />}>About</Link>
            </li>
          </ul>
        </nav>
    </header>
);
};

export default NavBar;


