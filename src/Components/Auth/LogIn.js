import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Grid,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Auth.css";

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!formData.email) formErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      formErrors.email = "Email is invalid";
    if (!formData.password) formErrors.password = "Password is required";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (
        storedUser &&
        storedUser.email === formData.email &&
        storedUser.password === formData.password
      ) {
        console.log("Login successful");
        navigate("/dashboard");
      } else {
        alert("Invalid email or password");
      }
    }
  };

  const handlePasswordToggle = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: "slick-dots white-dots",
  };

  return (
    <Box className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <Grid container className="w-full h-full">
        <Grid
          item
          xs={12}
          md={6}
          className="slider-section flex items-center justify-center"
          style={{ backgroundColor: "#89089F" }}
        >
          <Box className="w-full h-full flex items-center justify-center relative">
            <div className="pattern pattern1"></div>
            <div className="pattern pattern2"></div>

            <Slider {...sliderSettings} className="w-full">
              <div className="text-center">
                <img
                  src="/assets/Art.png"
                  alt="Slider 1"
                  className="mx-auto slider-image"
                />
                <Typography
                  variant="h4"
                  style={{
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: "26px",
                    marginBottom: "8px",
                  }}
                >
                  Welcome to our shop
                </Typography>
                <Typography style={{ color: "#fff", marginBottom: "30px" }}>
                  Purchase imported shoes
                </Typography>
              </div>

              <div className="text-center">
                <img
                  src="/assets/Art.png"
                  alt="Slider 2"
                  className="mx-auto slider-image"
                />
                <Typography
                  variant="h4"
                  style={{
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: "26px",
                    marginBottom: "8px",
                  }}
                >
                  Explore new arrivals
                </Typography>
                <Typography style={{ color: "#fff", marginBottom: "30px" }}>
                  Quality guaranteed
                </Typography>
              </div>

              <div className="text-center">
                <img
                  src="/assets/Art.png"
                  alt="Slider 3"
                  className="mx-auto slider-image"
                />
                <Typography
                  variant="h4"
                  style={{
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: "26px",
                    marginBottom: "8px",
                  }}
                >
                  Fast Shipping
                </Typography>
                <Typography style={{ color: "#fff", marginBottom: "30px" }}>
                  Delivered to your doorstep
                </Typography>
              </div>
            </Slider>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          className="flex items-center justify-center"
          style={{ backgroundColor: "#ffffff" }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            className="bg-white w-full max-w-md"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <Typography
              variant="h5"
              style={{
                color: "#343434",
                fontWeight: 800,
                fontSize: 28,
                marginBottom: "30px",
              }}
            >
              Welcome
            </Typography>

            <TextField
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              variant="outlined"
              margin="dense"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon />
                  </InputAdornment>
                ),
              }}
              size="small"
              sx={{
                width: {
                  xs: "90%",
                  sm: "80%",
                  md: "100%",
                  lg: "140%",
                },
                marginBottom: "10px",
              }}
            />

            <TextField
              placeholder="Password"
              name="password"
              type={formData.showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              variant="outlined"
              margin="dense"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handlePasswordToggle}>
                      {formData.showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              size="small"
              sx={{
                width: {
                  xs: "90%",
                  sm: "80%",
                  md: "100%",
                  lg: "140%",
                },
                marginBottom: "10px",
              }}
            />

            <Typography
              variant="body2"
              className="w-full text-right mt-3 mb-2 cursor-pointer"
              onClick={() => navigate("/forgot-password")}
              style={{ color: "#89089F", marginRight: "-40%" }}
            >
              Forgot password?
            </Typography>

            <Button
              type="submit"
              variant="contained"
              sx={{
                borderRadius: "30px",
                backgroundColor: "#89089F",
                color: "#fff",
                padding: "12px 0",
                width: {
                  xs: "90%",
                  sm: "80%",
                  md: "100%",
                  lg: "140%",
                },
                marginTop: "15px",
                textTransform: "none",
                "&:hover": { backgroundColor: "#6e057a" },
              }}
            >
              Log in
            </Button>

            <Typography
              variant="body2"
              className="mt-3"
              style={{ color: "#666", marginBottom: "10px", marginTop: "25px" }}
            >
              Have no account yet?
            </Typography>

            <Button
              variant="outlined"
              sx={{
                borderRadius: "30px",
                color: "#89089F",
                borderColor: "#89089F",
                padding: "10px 0",
                width: {
                  xs: "90%",
                  sm: "80%",
                  md: "100%",
                  lg: "140%",
                },
                marginTop: "15px",
                textTransform: "none",
                "&:hover": { backgroundColor: "#89089F", color: "#fff" },
              }}
              onClick={() => navigate("/signup")}
            >
              Registration
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LogIn;
