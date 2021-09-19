import React from "react";

const Select = ({ name, onChange, value, label, items, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <br></br>
      <select
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        className="custom-select"
      >
        <option key={"1"} value="" />
        {name == "branch" &&
          items &&
          items.map((item) => {
            return (
              <option key={item._id} value={item.name}>
                {item.name}
              </option>
            );
          })}
        {name == "specialization" &&
          items &&
          items.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
          {
            name !== "branch" && name!=="specialization" &&
            items.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })
          }
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
      <br /><br />
    </div>
  );
};

export default Select;
