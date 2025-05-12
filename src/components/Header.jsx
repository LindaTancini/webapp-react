//Importazioni
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-rose-200 text-white p-4 flex justify-between items-center">
      <div className="text-black">Logo</div>
      <nav className="space-x-4">
        <ul className="flex space-x-6 text-lg">
          <li className="text-black">
            <NavLink to="/">HomePage</NavLink>
          </li>
          <li className="text-black">
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
