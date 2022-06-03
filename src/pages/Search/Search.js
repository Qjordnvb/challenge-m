// Packages
import React, { useState, useEffect } from "react";
import isEmpty from "lodash/isEmpty";
//
import ItemsList from "../../components/ItemsList";
import Breadcrumb from "../../components/Breadcrumb";
import Spinner from "../../components/spinner";

export function Search({ search }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  // Fetch al endpoint para traer todos los items(limitado a 4)
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(
          `http://localhost:9000/api/items?q=${search}`
        );
        const data = await response.json();
        if (!response.error) {
          setItems(data.items);
          setCategories(data.categories);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }
    getProducts();
  }, [search]);

  return isEmpty(items) ? null : (
    <>
      <Breadcrumb categories={categories} />
      {loading ? <Spinner /> : <ItemsList items={items} />}
    </>
  );
}
