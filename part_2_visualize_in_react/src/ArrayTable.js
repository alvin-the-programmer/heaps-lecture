import React from "react";

const ArrayTable = props => {
  const { array } = props;
  const indices = array.map((_, i) => <td key={i}>{i}</td>);
  const elements = array.map((el, i) => <td key={i}>{String(el)}</td>);

  return (
    <table border="1">
      <tbody>
        <tr>{indices}</tr>
        <tr>{elements}</tr>
      </tbody>
    </table>
  );
};

export default React.memo(ArrayTable);
