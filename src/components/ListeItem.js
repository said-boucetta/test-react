import React from "react";

const ListeItem = (props) => {
  console.log("props = ", props);
  return (
    <li>
      <div>{props.data}</div>
    </li>
  );
};

export default ListeItem;
