import { Link } from "react-router-dom";
import "./Error.css";
export default function Error() {
  return (
    <div className="error-wrap">
      <h1>PAGE NOT FOUND!</h1>
      <img src="https://i.postimg.cc/rw7yDgjy/404-error.png" alt="" />
      <button>
        <Link to="/">Return Home</Link>
      </button>
    </div>
  );
}
