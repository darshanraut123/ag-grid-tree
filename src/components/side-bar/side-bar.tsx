import { Box } from "@mui/material";
import React from "react";
import classes from "./side-bar.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Image } from "react-bootstrap";
export default function Sidebar({
  isSidebarOpen,
  setSidebarOpen,
}: any): React.JSX.Element {
  return (
    <Box
      className={`light_text theme_dark_grey ${classes.sidebar} ${
        isSidebarOpen ? classes.sidebar_open : classes.sidebar_close
      }`}
    >
      <header className={classes.sidebar_head}>
        <Image width={150} height={50} src="logo.png" />
        <div
          className={classes.open_close}
          onClick={() => setSidebarOpen((prev: any) => !prev)}
        >
          {isSidebarOpen ? (
            <ArrowForwardIosIcon color="success" />
          ) : (
            <ArrowBackIosIcon color="success" />
          )}
        </div>
      </header>

      <div className={classes.profile_container}>
        <div className={classes.profile}></div>
        <p className={classes.name}>Vinnie Annunziata</p>
        <p className={classes.role_name}>Super User | QA Oxygen Franklin</p>
        <select
          className="form-select form-select-sm"
          onChange={(e) => console.log(e)}
        >
          <option disabled selected>
            Legal Entity
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </Box>
  );
}
