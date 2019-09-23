import React from "react";

const SchoolItem = ({ schoolName, address, seq }) => {
  return (
    <tbody style={{ marginTop: `20px` }}>
      <th>{schoolName}</th>
      <th>{address}</th>
    </tbody>
  );
};

export default SchoolItem;
