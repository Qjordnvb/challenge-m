// Packages
import React from "react";
import { Link } from "react-router-dom";
// Helpers
import formatPrice from "../../../commons/functions/formatPrice";
// Styles
import "./Item.scss";
// Assets
import icoFreeShipping from "../../../assets/ic_shipping.png";

export function Item({
  id,
  title,
  picture,
  price,
  free_shipping,
  condition,
  state_name,
}) {
  return (
    <li className={"items-list-item"}>
      <Link
        to={{
          pathname: `/items/${id}`,
        }}
      >
        <div className={"item-picture"}>
          {" "}
          <img src={picture} alt={title} />
        </div>
      </Link>

      <div className={"item-data"}>
        <div className={"container-price-shipping"}>
          <p className={"item-price"}>
            {formatPrice(price)}
            {price.decimals ? (
              <span className={"item-price-decimals"}>{price.decimals}</span>
            ) : null}
          </p>
          {free_shipping ? (
            <span className={"item-free-shipping"}>
              <img src={icoFreeShipping} alt="free-shipping" />
            </span>
          ) : null}
        </div>
        <Link
          className={"item-title"}
          to={{
            pathname: `/items/${id}`,
          }}
        >
          <p>{title}</p>
        </Link>
      </div>
      <p className={"item-state-name"}>{state_name}</p>
    </li>
  );
}
