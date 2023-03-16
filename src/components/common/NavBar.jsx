import "../../styles/NavBar.css";
import { Link } from "react-router-dom";
import About from "../../components/About/About";

const NavBar = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <article className="w-10/12 md:w-2/5 lg:w-1/5">
        <h1 className="name">YouTube</h1>
      </article>
      <nav className="navbar w-2/12 md:w-2/5 lg:w-1/5">
        <ul className="navbarLink flex justify-end">
          <li>
            <Link to="/" className="hover:text-black">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" element={<About />} className="hover:text-black">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
