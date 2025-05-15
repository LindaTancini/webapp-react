//Importazioni
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-pink-100 shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-black">Logo</div>
      <nav>
        <ul className="flex space-x-8 text-lg font-medium">
          <li>
            <NavLink
              to="/"
              className="text-pink-700 hover:text-pink-900 transition duration-200"
            >
              HomePage
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className="text-pink-700 hover:text-pink-900 transition duration-200"
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
