import React from "react";
import "./style.css";

export const Input = (props) => {
  return (
    <div>
      <input
        className={props.class}
        placeholder={props.placeholder}
        type={props.type}
      />
    </div>
  );
};
