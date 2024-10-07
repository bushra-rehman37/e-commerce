import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Inventory, Notifications, Analytics, Logout } from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link component
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';


const Sidebar = ({ isOpen, toggleSidebar }) => {
  const isLargeScreen = useMediaQuery('(min-width: 768px)');

  const menuItems = [
    { text: 'Dashboard', icon: <HomeOutlinedIcon />, route: '/dashboard' },
    { text: 'Products', icon: <InsertChartOutlinedIcon />, route: '/products' },
    { text: 'Notifications', icon: <NotificationsNoneOutlinedIcon />, route: '/notifications' },
    { text: 'Analytics', icon: <Analytics />, route: '/analytics' },
    { text: 'Inventory', icon: <Inventory2OutlinedIcon />, route: '/inventory' },
    { text: 'My Cart', icon: <ShoppingCartOutlinedIcon />, route: '/cart' },
  ];


  return (
    <Drawer
      anchor="left"
      open={isLargeScreen || isOpen}
      onClose={toggleSidebar}
      variant={isLargeScreen ? 'permanent' : 'temporary'}
      className="h-screen"
    >
      <div className="p-4 w-64 bg-white flex flex-col justify-between h-full">
        {/* User Profile */}
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

        {/* Menu Items */}
        <List>
          {menuItems.map((item) => (
            <Link to={item.route} key={item.text}>
              <ListItem button className="hover:bg-purple-200">
                <ListItemIcon className="text-gray-700">{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} className="text-gray-700" />
              </ListItem>
            </Link>
          ))}
        </List>

        {/* Logout */}
        <div className="mt-auto">
          <ListItem button className="hover:bg-gray-200">
            <ListItemIcon className="text-gray-700">
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" className="text-gray-700" />
          </ListItem>
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
