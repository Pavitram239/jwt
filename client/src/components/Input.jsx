import React from "react";

const Input = ({ type, name, id, label }) => {
  return (
    <div className="mb-3">
      <input
        className="form-control"
        type={type}
        name={name}
        placeholder={label}
      />
      <div className="d-none invalid-feedback">Invalid</div>
    </div>
  );
};

export default Input;
