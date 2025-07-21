import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="bg-indigo-500 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link
            to="/"
            className="hover:text-indigo-200 transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/open"
            className="hover:text-indigo-200 transition-colors duration-300"
          >
            Open Todos
          </Link>
        </li>
        <li>
          <Link
            to="/done"
            className="hover:text-indigo-200 transition-colors duration-300"
          >
            Done Todos
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
