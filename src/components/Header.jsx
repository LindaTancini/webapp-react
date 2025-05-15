import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-pink-800 shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-pink-100 font-bold text-xl">
        LiliMovie By Linda ♥
      </div>
      <nav>
        <ul className="flex space-x-8 text-lg font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-100 underline underline-offset-4 transition duration-200"
                  : "text-pink-300 hover:text-pink-100 transition duration-200"
              }
            >
              HomePage
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-100 underline underline-offset-4 transition duration-200"
                  : "text-pink-300 hover:text-pink-100 transition duration-200"
              }
            >
              I nostri film
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add"
              className={({ isActive }) =>
                isActive
                  ? "text-pink-100 underline underline-offset-4 transition duration-200"
                  : "text-pink-300 hover:text-pink-100 transition duration-200"
              }
            >
              Aggiungi un film
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
