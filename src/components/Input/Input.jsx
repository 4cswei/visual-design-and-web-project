import React from "react";
import "./Input.css";

function Input(props) {
  return (
    <div className="input-field">
      <label htmlFor={props.id}></label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required="required"
      />
      {props.error && <p class="input-error">{props.error}</p>}
    </div>
  );
}

export default Input;
