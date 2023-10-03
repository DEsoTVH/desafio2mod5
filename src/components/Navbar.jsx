import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/desafio2mod5/"> Home </Link> | <Link to="/desafio2mod5/favorites/"> Favorites </Link>
    </nav>
  );
};
export default Navbar;
