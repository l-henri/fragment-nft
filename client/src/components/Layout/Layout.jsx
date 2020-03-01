import React from "react";

const style = {
  display: "flex",
  justifyContent: "center",
  marginTop: 25
};

export const Layout = ({ children }) => {
  return <div style={style}>{children}</div>;
};
