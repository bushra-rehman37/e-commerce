import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Divider,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { ArrowDropUp, ArrowDropDown } from "@mui/icons-material";
import "../Dashboard/Dashboard.css";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "SNEAKERS",
      category: "Running",
      price: 65,
      image: "/assets/image 2.png",
    },
    {
      id: 2,
      name: "SNEAKERS",
      category: "Running",
      price: 65,
      image: "/assets/image 3.png",
    },
    {
      id: 3,
      name: "SNEAKERS",
      category: "Running",
      price: 65,
      image: "/assets/image 4.png",
    },
  ];

  const Counter = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount);

    const handleIncrement = () => setCount((prevCount) => prevCount + 1);
    const handleDecrement = () =>
      setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));

    return (
      <Box className="flex items-center">
        <Typography variant="body1" className="w-12 text-center">
          {count}
        </Typography>
        <Box className="flex flex-col items-center ml-2">
          <ArrowDropUp
            onClick={handleIncrement}
            className="counter-arrow -mb-2"
          />
          <ArrowDropDown
            onClick={handleDecrement}
            className="counter-arrow -mt-2"
          />
        </Box>
      </Box>
    );
  };

  return (
    <div className="flex min-h-screen bg-[#F1F1F1]">
      <div className="hidden md:block w-64 bg-white"></div>

      <div className="flex-grow p-6 bg-[#F1F1F1]">
        <Box className="flex flex-col md:flex-row justify-between gap-8 p-6 rounded-xl bg-white">
          <Box
            className="lg:w-9/12"
            sx={{ height: "auto", padding: "16px", backgroundColor: "white" }}
          >
            <Box className="flex items-center mb-4 -ml-2">
              <Typography>
                <ArrowBackIosIcon className="ml-2" />
                Shopping Continue
              </Typography>
            </Box>
            <hr className="w-1/2 mt-6 mb-4 border-gray-300" />

            <Typography className="text-black font-bold text-lg font-cart">
              Shopping Cart
            </Typography>
            <Typography className="text-gray-600 -mb-4">
              You have 3 items in your cart
            </Typography>

            {cartItems.map((item) => (
              <Box
                key={item.id}
                className="flex justify-between mt-4 items-center bg-white border border-gray-100 rounded-lg p-4 mb-4"
              >
                <Box className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover bg-gray-100 rounded-lg"
                  />
                  <Box className="ml-4">
                    <Typography className="font-bold cart-price text-black">
                      {item.name}
                    </Typography>
                    <Typography className="text-gray-600">
                      {item.category}
                    </Typography>
                  </Box>
                </Box>
                <Box className="flex items-center space-x-4">
                  <Counter initialCount={1} />
                  <Typography className="cart-price text-black font-bolder">
                    ${item.price.toFixed(2)}
                  </Typography>
                  <IconButton>
                    <img
                      src="/assets/Trash Can.png"
                      alt="trash-icon"
                      className="w-5 h-6"
                    />
                  </IconButton>
                </Box>
              </Box>
            ))}
          </Box>

          <Box className="lg:w-3/12 p-6 bg-primary rounded-2xl shadow-md">
            <Box>
              <Box className="flex items-center justify-between mb-4">
                <Typography variant="body1 h6" className="text-white text-lg">
                  Card Details
                </Typography>
                <img
                  src="/assets/Rectangle 3.png"
                  alt="User"
                  className="w-10 h-10"
                />
              </Box>

              <Typography variant="body1 h4" className="text-white -mt-2">
                Card Type
              </Typography>

              <Box className="flex space-x-4 mb-4">
                <img
                  src="/assets/Rectangle 9.png"
                  alt="MasterCard"
                  className="w-14 h-9"
                />
                <img
                  src="/assets/Rectangle 10.png"
                  alt="Visa"
                  className="w-14 h-9"
                />
                <img
                  src="/assets/Rectangle 11.png"
                  alt="Discover"
                  className="w-14 h-9"
                />
              </Box>

              <Typography variant="body1 h4" className="text-white mb-1 mt-2">
                Name on Card
              </Typography>
              <TextField
                placeholder="Name"
                variant="outlined"
                fullWidth
                className="bg-[#BA68C8] rounded-lg"
                InputProps={{
                  sx: {
                    height: "38px",
                    textAlign: "left",
                    color: "white",
                  },
                }}
                inputProps={{
                  style: {
                    textAlign: "left",
                    color: "white",
                  },
                }}
                sx={{ mt: 0.5 }}
              />

              <Typography
                variant="body1 h4"
                className="text-white mb-1 mt-4"
                sx={{ mt: 0.5 }}
              >
                Card Number
              </Typography>
              <TextField
                placeholder="1111 2222 3333 4444"
                variant="outlined"
                fullWidth
                className="bg-[#BA68C8] rounded-lg"
                inputProps={{
                  maxLength: 19,
                  pattern: "[0-9 ]*",
                  style: {
                    padding: "6px 12px",
                    textAlign: "left",
                    color: "white",
                  },
                }}
                InputProps={{
                  sx: {
                    height: "38px",
                  },
                }}
                sx={{ mt: 0.5 }}
              />

              <Box className="flex justify-between mb-2" sx={{ mt: 1 }}>
                <Typography
                  variant="body1 h4"
                  className="text-white w-1/2 mb-1 mt-4"
                >
                  Expiration Date
                </Typography>
                <Typography
                  variant="body1 h4"
                  className="ml-4 text-white w-1/2 mb-1 mt-4"
                >
                  CVV
                </Typography>
              </Box>
              <Box className="flex space-x-4" sx={{ mt: 0.5 }}>
                <TextField
                  placeholder="MM/YY"
                  variant="outlined"
                  className="bg-[#BA68C8] w-1/2 rounded-lg"
                  inputProps={{
                    maxLength: 5,
                    pattern: "(0[1-9]|1[0-2])/[0-9]{2}",
                    style: {
                      padding: "6px 12px",
                      color: "white",
                    },
                  }}
                  InputProps={{
                    sx: {
                      height: "38px",
                      "& .MuiInputBase-input": {
                        color: "white",
                      },
                    },
                  }}
                  sx={{ mb: 2 }}
                />
                <TextField
                  placeholder="123"
                  variant="outlined"
                  className="bg-[#BA68C8] w-1/2 rounded-lg"
                  inputProps={{
                    maxLength: 3,
                    pattern: "[0-9]*",
                    style: {
                      padding: "6px 12px",
                      color: "white",
                    },
                  }}
                  InputProps={{
                    sx: {
                      height: "38px",
                      "& .MuiInputBase-input": {
                        color: "white",
                      },
                    },
                  }}
                  sx={{ mb: 2 }}
                />
              </Box>

              <Divider className=" bg-white opacity-40" sx={{ mb: 1 }} />

              <Box className="flex justify-between mb-2 mt-2">
                <Typography variant="body1 h4" className="text-white">
                  Subtotal
                </Typography>
                <Typography variant="body1 h4" className="text-white">
                  $1,668
                </Typography>
              </Box>
              <Box className="flex justify-between mb-2">
                <Typography variant="body1 h4" className="text-white">
                  Shipping
                </Typography>
                <Typography variant="body1 h4" className="text-white">
                  $4
                </Typography>
              </Box>
              <Box className="flex justify-between font-bold mb-6">
                <Typography variant="body1 h4" className="text-white">
                  Total (Tax incl.)
                </Typography>
                <Typography variant="body1 h4" className="text-white">
                  $1,672
                </Typography>
              </Box>

              <button fullWidth className="bg-[#BA68C8] h-12 w-full rounded-lg">
                <Box className="flex justify-between p-2">
                  <Typography
                    variant="body1 h4"
                    className="text-white font-bold"
                  >
                    $1,672
                  </Typography>
                  <Typography variant="body1 h4" className="text-white ">
                    Checkout →
                  </Typography>
                </Box>
              </button>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Cart;
