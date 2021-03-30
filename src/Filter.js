import React from "react";
import { Form } from "react-bootstrap";
import "./Filter.css";

const Filter = ({ handleChange }) => {
  return (
    <form>
      <div className="option">
        <input
          type="checkbox"
          id="inputbox"
          name="diet"
          value="Standard"
          onChange={handleChange}
        ></input>
        <label className="labelCheckbox" for="diet">
          {" "}
          Standard
        </label>
      </div>
      <div className="option">
        <input
          type="checkbox"
          id="inputbox"
          name="diet"
          value="Vegetarian"
          onChange={handleChange}
        ></input>
        <label className="labelCheckbox" for="diet">
          {" "}
          Vegetarian
        </label>
      </div>
      <div className="option">
        <input
          type="checkbox"
          id="inputbox"
          name="diet"
          value="Vegan"
          onChange={handleChange}
        ></input>
        <label className="labelCheckbox" for="diet">
          {" "}
          Vegan
        </label>
      </div>
    </form>
  );
};

export default Filter;
