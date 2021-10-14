import { NavLink, Link } from 'react-router-dom';

function Header(props) {
  return (
    <>
      <header class="header">
        <div class="container1 flex2 center">
          <div class="logo">
            <Link to="/">
              <img src="media/molu house logo210802-01.png" alt="logo" />
            </Link>
          </div>
          <nav>
            <ul class="flex1 header-sub-menu">
              <li>
                <NavLink
                  to="/"
                  className="header-navlink"
                  activeClassName="active-navlink"
                  exact
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="header-navlink"
                  activeClassName="active-navlink"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/menu"
                  className="header-navlink"
                  activeClassName="active-navlink"
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="header-navlink"
                  activeClassName="active-navlink"
                >
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Contact-us"
                  className="header-navlink"
                  activeClassName="active-navlink"
                >
                  Contact us
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
