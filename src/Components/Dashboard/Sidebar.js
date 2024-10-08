import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Logout } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const isLargeScreen = useMediaQuery("(min-width: 768px)");
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { text: "Dashboard", icon: <HomeOutlinedIcon />, route: "/dashboard" },
    { text: "Products", icon: <InsertChartOutlinedIcon />, route: "/products" },
    {
      text: "Notifications",
      icon: <NotificationsNoneOutlinedIcon />,
      route: "/notifications",
    },
    { text: "Analytics", icon: <PieChartOutlineIcon />, route: "/analytics" },
    {
      text: "Inventory",
      icon: <Inventory2OutlinedIcon />,
      route: "/inventory",
    },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <Drawer
      anchor="left"
      open={isLargeScreen || isOpen}
      onClose={toggleSidebar}
      variant={isLargeScreen ? "permanent" : "temporary"}
      className="h-screen"
    >
      <div className="p-4 w-64 bg-white flex flex-col justify-between h-full">
        <div className="mb-4">
          <div className="flex items-center space-x-4">
            <img
              src="/assets/Rectangle 3.png"
              alt="User"
              className="w-10 h-10"
            />
            <div>
              <h2 className="font-medium text-gray-900">Mark Wood</h2>
              <p className="text-sm text-gray-500">mark@demo.com</p>
            </div>
          </div>
        </div>

        <List>
          {menuItems.map((item) => {
            const isSelected = location.pathname === item.route;
            return (
              <Link to={item.route} key={item.text}>
                <ListItem
                  button
                  className={`hover:bg-[#89089F] ${
                    isSelected ? "bg-[#89089F]" : ""
                  }`}
                  style={{
                    backgroundColor: isSelected ? "#89089F" : undefined,
                  }}
                >
                  <ListItemIcon>
                    {React.cloneElement(item.icon, {
                      style: { color: isSelected ? "white" : "#4A4A4A" },
                    })}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    className={`text-gray-700 ${
                      isSelected ? "text-white" : ""
                    }`}
                  />
                </ListItem>
              </Link>
            );
          })}
        </List>

        <div className="mt-auto">
          <ListItem
            button
            onClick={handleLogout}
            className="hover:bg-[#89089F] bg-transparent"
            style={{
              backgroundColor:
                location.pathname === "/login" ? "#89089F" : undefined,
            }}
          >
            <ListItemIcon>
              <Logout style={{ color: "#4A4A4A" }} />
            </ListItemIcon>
            <ListItemText primary="Logout" className="text-gray-700" />
          </ListItem>
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
