import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import FeaturedBanner from "./FeaturedBanner";
import ProductGrid from "./Product";
import Cart from "../Cart/Cart";
import products from "./Product";
import "./Dashboard.css";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const [showCart, setShowCart] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="flex bg-[#F1F1F1] min-h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-grow ml-0 md:ml-64">
        <Header toggleSidebar={toggleSidebar} toggleCart={toggleCart} />

        <main className="p-4 bg-[#F1F1F1] mt-0">
          {showCart ? (
            <Cart />
          ) : (
            <>
              <FeaturedBanner />

              <ProductGrid products={products} />
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
