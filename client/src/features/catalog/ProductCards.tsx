import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import type { product } from "../../app/models/product";

type Props = {
  product: product;
};

export default function ProductCards({ product }: Props) {
  return (
    <Card elevation={3}
      sx={{width: 300, height: 400, display: "flex", flexDirection: "column", justifyContent: "space-between", marginBottom: 2}}    
    >
      <CardMedia
        sx={{ height: 240, backgroundSize: "cover" }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography
          gutterBottom
          sx={{ color: "promary.main" }}
          variant="subtitle2"
        >
          {product.name}
        </Typography>
        <Typography variant="h6" sx={{ color: "secondary.main" }}>
          ${(product.price / 100).toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between", padding: 2 }}>
        <Button>Add to cart</Button>
        <Button>View</Button>
      </CardActions>
    </Card>
  );
}
