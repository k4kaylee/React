import React, { useContext } from "react";
import { Link } from "react-router-dom"
import AuthContext from "../context"

const NavBar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  return (
    <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/users'>Users</Link></li>
        <li><Link to='/posts'>Posts</Link></li>
        <li><Link to='/devices'>Devices</Link></li>
        <li><a href="/">Log in</a></li>
        <a className="waves-effect waves-light btn" onClick={() => setIsAuth(false)}>
          <i className="material-icons right">exit_to_app</i>
          Log out
        </a>
      </ul>
    </div>
  </nav>

  );
}
export default NavBar;
