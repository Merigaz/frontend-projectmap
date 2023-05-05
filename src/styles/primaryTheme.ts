import React from "react";
import Bgimg from "../assets/LayoutBGimg.png";
export const primaryTheme = {
  colorPrimary: "#A48C59",
  colorPrimaryText: "#fcc501",
  colorText: "#343D4B",
};

export const componentsPrimaryTheme = {
  Menu: {
    colorPrimary: "#FFFEF7",
    colorItemText: "#C3B984",
    colorItemTextHover: "#E6DEB7",
  },
  Typography: {
    colorText: "#665982",
    colorTextHeading: "#665982",
  },
  Button: {
    colorTextLightSolid: "#E6DEB7",
    colorText: "#E6DEB7",
  },
  Select: {
    controlItemBgHover: "#E6DEB7",
    controlItemBgActive: "#C3B984"
  },
};
export const LeftsiderStyle = {
  backgroundColor: "transparent",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 999,
  padding: "16px",
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
  border: "1px solid #343D4B",
  width: "44%",
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
  borderRadius: "20px",
  backdropFilter: "blur(5px)",
  border: "1px solid #A49859",
  boxShadow: " 0 0 10px rgba(0, 0, 0, 0.8)",
} as React.CSSProperties;
export const ButtonLoginStyle = {
  width: "100%",
};
export const CardLoginStyle = {
  border: "1px solid #A49859",
  boxShadow: "0 0 5px #A48C59",
};
export const ButtonDownloadStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignSelf: "center",
  width: "40%",
} as React.CSSProperties;

export const CheckboxGroupStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  border: "1px solid #A48C59",
  borderRadius: "20px",
  gap: "8px",
  padding: "20px",
  width: "auto",
  heigth: "auto",
} as React.CSSProperties;
