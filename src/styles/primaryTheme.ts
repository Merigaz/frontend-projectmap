import React from "react";
import Bgimg from "../assets/LayoutBGimg.png";
export const primaryTheme = {
  colorPrimary: "#A48C59",
  colorPrimaryText: "#fcc501",
};

export const componentsPrimaryTheme = {
  Menu: {
    colorPrimary: "#FFFEF7",
    colorItemText: "#A49859",
    colorItemTextHover: "#E6DEB7",
  },
  Typography: {
    colorText: "#665982",
    colorTextHeading: "#665982",
  },
};
export const LeftsiderStyle = {
  backgroundColor: "transparent",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 999,
  padding: "16px",
  backdropFilter: "blur(5px)",
  borderLeft: "1px solid black",
  borderRight: "1px solid black",
  boxShadow: "0 0 15px rgba(164, 152, 89, 0.5)",
};
export const LoginContentStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "transparent",
};
export const LayoutStyle = {
  height: "100vh",
  backgroundImage: `url(${Bgimg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  display: "flex",
  borderTop: "1px solid black",
  borderRight: "1px solid black",
  borderBottom: "1px solid black",
};
export const ProfileContentStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export const SidebarStyle = {
  position: "absolute",
  bottom: "10px",
  left: "50%",
  transform: "translateX(-50%)",
  borderRadius: "20px",
  backgroundColor: "#343D4B",
  width: "20%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
} as React.CSSProperties;
export const HeaderStyle = {
  backgroundColor: "transparent",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)",
};
export const LayoutFooterStyle = {
  backgroundColor: "transparent",
};
export const LayoutHeaderStyle = {
  backgroundColor: "transparent",
};
export const LayoutContentStyle = {
  backgroundColor: "transparent",
};
export const LeftSiderContentStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  height: "100%",
  width: "auto",
} as React.CSSProperties;
export const ButtonLoginStyle = {
  width: "100%",
};
export const CardLoginStyle = {
  border: "1px solid black",
  boxShadow: "0 0 5px #A48C59",
  
};
