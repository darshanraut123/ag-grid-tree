import React, { useContext } from "react";
import { ThemeContext } from "../../context/modal-context";
import { Box } from "@mui/material";
import { Button } from "react-bootstrap";

interface CustomModalInterface {
  children: React.JSX.Element;
}

export default function CustomModal({
  children,
}: CustomModalInterface): React.JSX.Element | null {
  const { showModal, setShowModal }: any = useContext(ThemeContext);

  return showModal ? (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        position: "absolute",
        zIndex: 100,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "90%",
          width: "90%",
          backgroundColor: "rgba(265,265,265,1)",
          borderRadius: 10,
          position: "relative",
        }}
      >
        <Button
          style={{ margin: 10, position: "absolute", right: 5 }}
          title="Close"
          onClick={() => setShowModal(false)}
        >
          Close
        </Button>
        <Box sx={{ display: "flex", justifyContent: "center", margin: 5 }}>
          <h2 className="text-2xl font-semibold text-center">Modal Title</h2>
        </Box>
        <Box>{children}</Box>
      </div>
    </div>
  ) : null;
}
