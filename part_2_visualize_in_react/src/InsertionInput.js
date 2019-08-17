import React from "react";

const InsertionInput = props => {
  const { handleChange, handleSubmit, value } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter a number to insert:</label>
      <input type="text" onChange={handleChange} value={value} />
    </form>
  );
};

export default InsertionInput;
