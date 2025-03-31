import React, { JSX } from "react";
import Sidebar from "../../components/side-bar/side-bar";
import classes from "./home.module.css";
import MainContent from "../../components/main-content/main-content";
export default function Home(): JSX.Element {
  const [isSidebarOpen, setSidebarOpen] = React.useState(true);

  return (
    <>
      <div className={`${classes.env} theme_green`} />
      <div className={classes.main_body}>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <MainContent isSidebarOpen={isSidebarOpen} />
      </div>
    </>
  );
}
