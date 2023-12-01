import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <div className="wrap">
      <header>
        <div className="logo">
          <h1>
            <Link to="/" className="nayan">
              nayan
            </Link>
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/news" className="link">
                News
              </Link>
            </li>
            <li>
              <Link to="/career" className="link">
                Career
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="link">
                Contacts
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                About
              </Link>
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
