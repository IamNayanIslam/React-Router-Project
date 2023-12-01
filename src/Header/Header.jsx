import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <div className="wrap">
      <header>
        <div className="logo">
          <h1>nayan</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <div className="buttons">
          <ul>
            <li className="log">Log In</li>
            <li className="sign">Sign Up</li>
          </ul>
        </div>
      </header>
    </div>
  );
}
