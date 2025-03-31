import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { MenuItem, Select } from "@mui/material";
import classes from "./searchbar.module.css";

export default function SearchBar() {
  return (
    <div className={classes.filter_container}>
      <Paper
        sx={{
          m: "5px 10px",
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 200,
          height: "30px",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>

      <Paper
        sx={{
          m: "5px 10px",
        }}
      >
        <Select
          style={{ width: 200, height: "30px" }}
          value={""}
          onChange={() => {}}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">Filter by counterparty</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </Paper>
    </div>
  );
}
