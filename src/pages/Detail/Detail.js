// Packages
import React, { useState, useEffect } from "react";
import isEmpty from "lodash/isEmpty";
// Components
import ItemDetail from "../../components/ItemDetail";

export function Detail({ match }) {
  const id = match.params.id;
  const [item, setItem] = useState({});
  // Fecth al endpoint para traer el detalle del item
  useEffect(() => {
    fetch(`http://localhost:9000/api/items/${id}`)
      .then((response) => response.json())
      .then((response) => {
        if (!response.error) {
          setItem(response.item);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return isEmpty(item) ? null : (
    <div className="detail-view">
      <ItemDetail item={item} />
    </div>
  );
}
