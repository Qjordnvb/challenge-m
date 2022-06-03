// Packages
import React from "react";
// Components
import Item from "./Item";
// Styles
import "./ItemsList.scss";

export function ItemsList({ items }) {
  return (
    <ol className={"items-list"}>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </ol>
  );
}
