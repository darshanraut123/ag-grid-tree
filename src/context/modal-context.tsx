import React from "react";

export const ThemeContext = React.createContext({});

export default function ModalContext({ children }: any) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <ThemeContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ThemeContext.Provider>
  );
}
