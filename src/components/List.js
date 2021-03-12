import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
  return props.data.map((el) => <ListItem todo={el.task} key={el.id} />);
};

export default List;
