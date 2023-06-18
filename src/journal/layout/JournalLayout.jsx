import { Box, Toolbar } from "@mui/material";
import React from "react";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";

const drawerWitdh = 240;
export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWitdh} />

      <SideBar drawerWidth={drawerWitdh} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};
