import { Box } from "@mui/material";
import type { product } from "../../app/models/product"
import ProductCards from "./ProductCards";

type Props = {
  products: product[];
  
}


export default function ProductList({products}: Props) {
  return (
     <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 , justifyContent: "center"}}>
        {products.map(products => (
          <ProductCards key={products.id} product={products}  />
        ))}
      </Box>
  )
}