
import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import type { product } from "../../app/models/product";



export default function Catalog() {
  const [products, setProducts] = useState<product[]>([]);
  

  useEffect(() => {
    fetch("https://localhost:5001/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  

  
  
  return (
    <>
      <ProductList products={products} />
      
    </>
  );
}
