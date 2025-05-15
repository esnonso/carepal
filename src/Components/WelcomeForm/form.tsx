import { useState } from "react";
import classes from "./form.module.css";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

export default function WelcomeForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [symptoms, setSymptoms] = useState("");
  return (
    <div className={classes["form-container"]}>
      <form className={classes.form}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Link to="/" className={classes["link"]}>
            <HiArrowLeft size={14} style={{ marginRight: "0.5rem" }} /> Back
          </Link>
        </div>
        <h3>Fill All inputs</h3>

        <div className={classes["input-container"]}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={classes["input-container"]}>
          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className={classes["input-container"]}>
          <label>
            Descibe All Symptoms You feel, including when they started, how
            often they occur, and if anything makes them better or worse
          </label>
          <textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            rows={8}
          />
        </div>

        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
