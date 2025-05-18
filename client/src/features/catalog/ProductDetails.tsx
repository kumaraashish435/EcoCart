import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { product } from "../../app/models/product";
import {
  Button,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<product | null>(null);

  useEffect(() => {
    fetch(`https://localhost:5001/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const productDetails = [
    { Label: "Name", Value: product.name },
    { Label: "Description", Value: product.description },
    { Label: "Type", Value: product.type },
    { Label: "Brand", Value: product.brand },
    { Label: "Quantity in stock", Value: product.quantityInStock },
  ];

  return (
    <div
      style={{
        width: "80%",
        height: "80%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid size={6}>
          <img
            src={product?.pictureUrl}
            alt={product?.name}
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid size={6}>
          <Typography variant="h4">{product?.name}</Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <Typography variant="h6" color="secondary.main">
            ${(product?.price / 100).toFixed(2)}
          </Typography>
          <TableContainer>
            <Table sx={{ "& td": { fontSize: "1rem" } }}>
              <TableBody>
                {productDetails.map((detail, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      {detail.Label}
                    </TableCell>
                    <TableCell>{detail.Value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid size={6}>
              <TextField
                label="Quantity in stock"
                variant="outlined"
                fullWidth
                type="number"
                defaultValue={1}
              />
            </Grid>
            <Grid size={6}>
              <Button
                sx={{ height: "100%" }}
                color="primary"
                variant="contained"
                size="large"
                fullWidth
              >
                Add to cart
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
