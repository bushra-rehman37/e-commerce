import React, { useState } from "react";
import {
  Card,
  CardMedia,
  Typography,
  Box,
  Divider,
  Dialog,
  IconButton,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";
import "./Dashboard.css";

const ProductCard = ({ product, onAddToCart, onQuickView }) => {
  return (
    <Card className="-mt-5 product-card rounded-3xl shadow-md flex flex-col transition-transform transform hover:shadow-lg hover:shadow-purple-400">
      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        className="object-contain h-50 w-full"
      />

      <Box className="flex flex-col">
        <Box className="flex mt-2">
          <button
            className="bg-black text-white font-bold hover:bg-gray-800 h-10"
            onClick={() => onAddToCart(product)}
            style={{ flex: 1, fontSize: "0.75rem" }}
          >
            ADD TO CART
          </button>
          <button
            className="bg-primary text-white font-bold hover:bg-primary-dark h-10"
            onClick={() => onQuickView(product)}
            style={{ flex: 1, fontSize: "0.65rem" }}
          >
            QUICK VIEW
          </button>
        </Box>

        <Box className="mt-4 p-2">
          <Box className="flex justify-between items-center p-2">
            <Typography variant="h6" className="sneaker">
              {product.name}
            </Typography>
            <FavoriteIcon
              className="ml-12"
              style={{ color: "#89089F" }}
              fontSize="xm"
            />
            <Typography className="sneaker">
              ${product.price.toFixed(2)}
            </Typography>
          </Box>
          <Divider className="h-2 bg-white" />
          <Box className="flex justify-between items-center mt-2 p-2">
            <Typography className="text-gray-800 text-lg italic mx-2">
              {product.category}
            </Typography>
            <Box className="flex text-black-500">
              {Array.from({ length: 4 }).map((_, index) => (
                <StarIcon key={index} fontSize="small" />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

const ProductGrid = ({ products, onAddToCart, onQuickView }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-6  ">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onQuickView={onQuickView}
        />
      ))}
    </div>
  );
};

const Product = () => {
  const [setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} added to cart!`);
  };

  const handleQuickView = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseQuickView = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <ProductGrid
        products={products}
        onAddToCart={handleAddToCart}
        onQuickView={handleQuickView}
      />

      <Dialog open={!!selectedProduct} onClose={handleCloseQuickView}>
        {selectedProduct && (
          <Box className="">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              className="bg-primary text-white p-4 rounded-t-md "
            >
              <Typography variant="h4">{selectedProduct.name}</Typography>
              <IconButton onClick={handleCloseQuickView}>
                <CloseIcon style={{ color: "#ffff" }} />
              </IconButton>
            </Box>

            <CardMedia
              component="img"
              image={selectedProduct.image}
              alt={selectedProduct.name}
              className="object-contain w-full mt-4"
            />

            <Box className="mt-4 p-2 justify-between">
              <Box className="rounded-lg bg-primary p-4 flex items-center shadow-md">
                <Typography variant="h6" className="text-white">
                  Price: ${selectedProduct.price.toFixed(2)}
                </Typography>
              </Box>
              <Divider className="h-2" />
              <Box className="rounded-lg bg-primary p-4 flex items-center shadow-md">
                <Typography variant="h6" className="text-white">
                  Category: {selectedProduct.category}
                </Typography>
              </Box>
            </Box>

            <Box className="mt-4 p-4"></Box>
          </Box>
        )}
      </Dialog>
    </>
  );
};

const products = [
  {
    id: 1,
    name: "SNEAKERS",
    price: 65.0,
    category: "Running",
    image: "/assets/image 2.png",
  },
  {
    id: 2,
    name: "SNEAKERS",
    price: 65.0,
    category: "Running",
    image: "/assets/image 3.png",
  },
  {
    id: 3,
    name: "SNEAKERS",
    price: 65.0,
    category: "Running",
    image: "/assets/image 4.png",
  },
  {
    id: 4,
    name: "SNEAKERS",
    price: 65.0,
    category: "Running",
    image: "/assets/image 5.png",
  },
  {
    id: 5,
    name: "SNEAKERS",
    price: 65.0,
    category: "Running",
    image: "/assets/image-252x252.jpg",
  },
];

export default Product;
