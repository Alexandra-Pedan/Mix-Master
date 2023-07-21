import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-wrapper">
          <span className="brand-logo">Logo</span>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/newsletter">Newsletter</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
