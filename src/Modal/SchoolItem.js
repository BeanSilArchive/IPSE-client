import React from "react";
import styled from "styled-components";
import oc from "open-color";

const Item = styled.tbody`
  margin-top: 20px;
  &:hover {
    background-color: ${oc.gray[0]};
    cursor: pointer;
  }
`;

const SchoolItem = ({
  schoolName,
  address,
  seq,
  setModal,
  setSchoolName,
  setSeq
}) => {
  const SelectItem = () => {
    setSchoolName(schoolName);
    setSeq(seq);
    setModal(false);
  };
  return (
    <Item onClick={SelectItem}>
      <th id="school">{schoolName}</th>
      <th id="address">{address}</th>
    </Item>
  );
};

export default SchoolItem;
