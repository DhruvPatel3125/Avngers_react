import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import LoginApp from "./LoginApp";
import JoinUsApp from "./JoiningUs";

const AvengersNavbar = () => {
  const [anchorElMissions, setAnchorElMissions] = React.useState(null);
  const [anchorElHome, setAnchorElHome] = React.useState(null);
  const [anchorElHeroes, setAnchorElHeroes] = React.useState(null);
  const [anchorElTech, setAnchorElTech] = React.useState(null);
  const [anchorElContact, setAnchorElContact] = React.useState(null);

  const handleMenuOpen = (event, setAnchorEl) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (setAnchorEl) => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1b1f23" }}>
      <Toolbar>
        {/* Brand Name */}
        <Typography
          variant="h5"
          sx={{ flexGrow: 1, color: "#e62429", fontWeight: "bold" }}
        >
          Avengers Initiative
        </Typography>

        {/* Navbar Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2 }}>
          {/* Home Dropdown */}
          <Button
            color="inherit"
            sx={{ color: "#f5f5f5" }}
            onClick={(e) => handleMenuOpen(e, setAnchorElHome)}
          >
            Home
          </Button>
          <Menu
            anchorEl={anchorElHome}
            open={Boolean(anchorElHome)}
            onClose={() => handleMenuClose(setAnchorElHome)}
            sx={{ mt: 1 }}
          >
            <MenuItem onClick={() => handleMenuClose(setAnchorElHome)}>Go to Homepage</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElHome)}>About Us</MenuItem>
          </Menu>

          {/* Heroes Dropdown */}
          <Button
            color="inherit"
            sx={{ color: "#f5f5f5" }}
            onClick={(e) => handleMenuOpen(e, setAnchorElHeroes)}
          >
            Heroes
          </Button>
          <Menu
            anchorEl={anchorElHeroes}
            open={Boolean(anchorElHeroes)}
            onClose={() => handleMenuClose(setAnchorElHeroes)}
            sx={{ mt: 1 }}
          >
            <MenuItem onClick={() => handleMenuClose(setAnchorElHeroes)}>View All Heroes</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElHeroes)}>Hero Details</MenuItem>
          </Menu>

          {/* Missions Dropdown */}
          <Button
            color="inherit"
            sx={{ color: "#f5f5f5" }}
            onClick={(e) => handleMenuOpen(e, setAnchorElMissions)}
          >
            Missions
          </Button>
          <Menu
            anchorEl={anchorElMissions}
            open={Boolean(anchorElMissions)}
            onClose={() => handleMenuClose(setAnchorElMissions)}
            sx={{ mt: 1 }}
          >
            <MenuItem onClick={() => handleMenuClose(setAnchorElMissions)}>Current Missions</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElMissions)}>Completed Missions</MenuItem>
          </Menu>

          {/* Technology Dropdown */}
          <Button
            color="inherit"
            sx={{ color: "#f5f5f5" }}
            onClick={(e) => handleMenuOpen(e, setAnchorElTech)}
          >
            Technology
          </Button>
          <Menu
            anchorEl={anchorElTech}
            open={Boolean(anchorElTech)}
            onClose={() => handleMenuClose(setAnchorElTech)}
            sx={{ mt: 1 }}
          >
            <MenuItem onClick={() => handleMenuClose(setAnchorElTech)}>Tech Stack</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElTech)}>How It Works</MenuItem>
          </Menu>

          {/* Contact Us Dropdown */}
          <Button
            color="inherit"
            sx={{ color: "#f5f5f5" }}
            onClick={(e) => handleMenuOpen(e, setAnchorElContact)}
          >
            Contact Us
          </Button>
          <Menu
            anchorEl={anchorElContact}
            open={Boolean(anchorElContact)}
            onClose={() => handleMenuClose(setAnchorElContact)}
            sx={{ mt: 1 }}
          >
            <MenuItem onClick={() => handleMenuClose(setAnchorElContact)}>Contact Form</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setAnchorElContact)}>Reach Us via Email</MenuItem>
          </Menu>
        </Box>

        {/* Mobile Menu Button */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Call to Action */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Button>
            <JoinUsApp />
          </Button>
          <Button color="inherit" sx={{ color: "#f5f5f5" }}>
            <LoginApp />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AvengersNavbar;
