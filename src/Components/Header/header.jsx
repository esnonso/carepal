import { Link } from "react-router-dom";
import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>
        <Link to="/" className={classes.link}>
          Care-Paddy
        </Link>
      </h1>
      <div>
        <Link to="/" className={classes.link}>
          HOME
        </Link>
        <Link to="/" className={classes.link}>
          PROFILE
        </Link>
      </div>
    </header>
  );
};

export default Header;
