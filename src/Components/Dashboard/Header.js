import React from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Header = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const handleCartNavigation = () => {
    navigate("/cart");
  };

  return (
    <div
      className="flex justify-between items-end p-2 bg-transparent shadow-none"
      style={{ height: "40px" }}
    >
      <button
        onClick={toggleSidebar}
        className="md:hidden w-20 h-10 ml-6 -mb-6"
      >
        <MenuIcon />
      </button>

      <h1 className="text-xl font-bold mb-1"> </h1>

      <button
        className="bg-white w-32 h-10 rounded-3xl text-black mr-6 -mb-6 flex items-center justify-center shadow-sm"
        onClick={handleCartNavigation}
      >
        <ShoppingCartOutlinedIcon className="text-black-500 cursor-pointer mr-1" />
        My Cart
      </button>
    </div>
  );
};

export default Header;
