import { Link } from "react-router-dom";
import NavbarLink from "./NavbarLink";
function Navbar() {
  return (
    <div className="bg-base-300 ">
      <div className="navbar aligin-container ">
        <div className="navbar-start">
          <Link className="btn btn-primary lg:btn-lg" to="/">
            My Kitchen
          </Link>
          <div className="dropdown lg:hidden">
            <button>MyK</button>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavbarLink />
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar