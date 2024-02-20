import { Link } from "react-router-dom";
import 'boxicons'

const Navbar = () => {
  return (
    <nav className="navbar flex">
      <Link to="/"><h1>NaturalPic</h1></Link>
      <div className="links">
          <Link to="/" className="flex">
            <box-icon name='home' type='solid' color='#ffffff' ></box-icon>
            Home
          </Link>
          <Link to="/favoritos" className="flex">
            <box-icon name='heart' type='solid' color='#ffffff' ></box-icon>
            Favoritos
          </Link>
      </div>
    </nav>
  );
};
export default Navbar;
