import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Products", "Services", "AboutUs", "ContactUs"];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedPage, setSelectedPage] = useState(pages[0]);

  const handleDrawerItemClick = (page) => {
    setSelectedPage(page);
    setOpenDrawer(false);
  };

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton
              key={index}
              selected={selectedPage === page}
              onClick={() => handleDrawerItemClick(page)}
            >
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
Drawer.jsx;
