import { Link } from "react-router-dom";
import classes from "./home.module.css";

function Home() {
  return (
    <main className={classes.main}>
      <h1 className={classes["head-text"]}>Welcome To Care-Paddy</h1>

      <p>How would you like to Me to know your symptoms?</p>
      <div style={{ marginTop: "1rem" }}>
        <Link to="/welcome-chat" className={classes["link"]}>
          Chat With Me
        </Link>

        <Link to="/welcome-form" className={classes["link-two"]}>
          Fill A Form
        </Link>
      </div>
    </main>
  );
}

export default Home;
