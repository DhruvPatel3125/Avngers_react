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

const AvengersNavbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
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
          <Button color="inherit" sx={{ color: "#f5f5f5" }}>
            Home
          </Button>
          <Button color="inherit" sx={{ color: "#f5f5f5" }}>
            Heroes
          </Button>
          <Button
            color="inherit"
            sx={{ color: "#f5f5f5" }}
            onClick={handleMenuOpen}
          >
            Missions
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ mt: 1 }}
          >
            <MenuItem onClick={handleMenuClose}>Current Missions</MenuItem>
            <MenuItem onClick={handleMenuClose}>Completed Missions</MenuItem>
          </Menu>
          <Button color="inherit" sx={{ color: "#f5f5f5" }}>
            Technology
          </Button>
          <Button color="inherit" sx={{ color: "#f5f5f5" }}>
            Contact Us
          </Button>
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
          <Button
            variant="contained"
            sx={{ backgroundColor: "#e62429", color: "#f5f5f5" }}
          >
            Join Us
          </Button>
          <Button color="inherit" sx={{ color: "#f5f5f5" }}>
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AvengersNavbar;
