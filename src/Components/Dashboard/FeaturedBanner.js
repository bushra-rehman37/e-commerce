import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import "./Dashboard.css";

const FeaturedBanner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 p-4 rounded-xl">
      <Card className="back-card relative w-full md:w-2/3 h-96 rounded-3xl overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-black "></div>

        <img
          src="/assets/MAYHEM (1).png"
          alt="mayhem2"
          className="absolute z-20 top-4 left-1/2 transform -translate-x-1/2 w-full"
        />

        <CardMedia
          component="img"
          image="/assets/Group 17 (1).png"
          alt="group17"
          className="absolute inset-0 w-full h-full object-cover opacity-50 z-10"
        />

        <img
          src="/assets/MAYHEM.png"
          alt="mayhem"
          className="absolute z-20 bottom-4 left-1/2 transform -translate-x-1/2 w-full"
        />

        <CardContent className="relative z-30 flex h-full">
          <div className="relative ml-32 w-full md:w-2/3 h-full text-white p-6 flex items-center">
            <div className=" bg-primary absolute h-96 w-1/3 mt-2"></div>

            <img
              src="/assets/rohit-tandon-9wg5jCEPBsw-unsplash 2.png"
              alt="Shoe"
              className="absolute z-20 top-1/2 transform -translate-y-1/2 mr-24 shoeImage"
              style={{
                width: "350px",
                height: "200px",
              }}
            />

            <div className="ml-80 z-30 flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-2">ESSENTIAL ITEMS FOR</h2>

              <div className="flex items-center mt-2">
                <div className="bg-primary text-white px-6 py-1 width-[200px] rounded-xl font-bold text-4xl">
                  $99
                </div>
              </div>

              <p className="mt-4 text-white" style={{ fontSize: "11.5px" }}>
                Nulla accumsan malesuada egestas nam egestas. Quis vulputate
                blandit dui.
              </p>

              <button
                className="mt-6 px-3 py-2 bg-white text-black rounded-xl shadow-md text-xs font-black "
                style={{ width: "110px" }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className=" back relative w-full md:w-1/3 h-96 rounded-3xl overflow-hidden flex items-center justify-center">
        <CardMedia
          component="img"
          image="/assets/Group 17.png"
          alt="Running Woman Background"
          className="absolute inset-x-0 bottom-0 w-full h-1/2 object-cover opacity-50 rounded-3xl"
        />

        <img
          src="/assets/woman.png"
          alt="Running Woman"
          className="absolute left-4 bottom-0 w-64 z-30"
        />

        <Box
          className="relative flex flex-col items-center justify-center z-40 p-4"
          style={{
            width: "250px",
            marginLeft: "50%",
            marginRight: "10%",
            marginTop: "-3rem",
            borderRadius: "10px",
          }}
        >
          <Box className="relative flex items-center justify-center mb-2 mt-44">
            <img
              src="/assets/Rectangle 30.png"
              alt="Purple Box"
              className="absolute w-24 h-10 -mt-14 -left-2"
            />
            <Typography variant="h1" className="fifty z-10">
              50
            </Typography>

            <Box className="flex flex-col items-start ml-2">
              <Typography className=" percent-off">%</Typography>
              <Typography className=" percent-off">OFF</Typography>
            </Box>
          </Box>

          <img
            src="/assets/Vector 1.png"
            alt="Line"
            style={{ width: "95%" }}
            className="-mt-4"
          />

          <Box className="relative flex items-center justify-center mt-4">
            <img
              src="/assets/Rectangle 30.png"
              alt="Purple Box"
              className="absolute mt-4 w-19 h-10 ml-36"
            />
            <Typography className=" font z-10">RUNNING KIT</Typography>
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export default FeaturedBanner;
