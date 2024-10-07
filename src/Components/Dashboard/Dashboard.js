import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import FeaturedBanner from './FeaturedBanner';
import ProductGrid from './Product';
import Cart from '../Cart/Cart';
import products from './Product';
import './Dashboard.css';

const Dashboard = () => {
  // State to track if Sidebar is open
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // State to track if Cart is open or not
  const [showCart, setShowCart] = useState(false);

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Function to toggle between the dashboard and cart views
  const toggleCart = () => {
    setShowCart(!showCart); // Toggle between showing and hiding the cart
  };

  return (
    <div className="flex bg-[#F1F1F1] min-h-screen">
      {/* Sidebar - open permanently on large screens and toggled on small screens */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content Area */}
      <div className="flex-grow ml-0 md:ml-64">
        {/* Header with Sidebar and Cart Toggle Handlers */}
        <Header toggleSidebar={toggleSidebar} toggleCart={toggleCart} />

        {/* Main Content */}
        {/* Adjust margin-top to 0px to remove spacing */}
        <main className="p-4 bg-[#F1F1F1] mt-0"> 
          {/* Conditionally render either the dashboard view or the cart based on showCart state */}
          {showCart ? <Cart /> : (
            <>
              {/* Show the Featured Banner only if the Cart is not visible */}
              <FeaturedBanner />

              {/* Show the Product Grid */}
              <ProductGrid products={products} />
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
