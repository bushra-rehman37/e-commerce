import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Header = ({ toggleSidebar }) => {
  const navigate = useNavigate(); // Initialize navigation hook

  // Handle navigation to Cart
  const handleCartNavigation = () => {
    navigate('/cart');
  };

  return (
    <div
      className="flex justify-between items-end p-2 bg-transparent shadow-none"
      style={{ height: '40px' }} // Reduced height to minimize gap
    >
      {/* Sidebar Toggle Button (visible only on small screens) */}
      <button onClick={toggleSidebar} className="md:hidden w-20 h-10 ml-6 -mb-6">
        <MenuIcon />
      </button>

      {/* Dashboard Title */}
      <h1 className="text-xl font-bold mb-1"> </h1>

      {/* Shopping Cart Icon Button */}
      <button
        className="bg-white w-32 h-10 rounded-3xl text-black mr-6 -mb-6 flex items-center justify-center shadow-sm"
        onClick={handleCartNavigation} // Use navigation to update path
      >
        <ShoppingCartOutlinedIcon className="text-black-500 cursor-pointer mr-1" />
        My Cart
      </button>
    </div>
  );
};

export default Header;
