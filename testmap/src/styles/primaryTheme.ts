import Bgimg from "../assets/LayoutBGimg.png";
export const primaryTheme = {
  colorPrimary: "#6B5F86",
  colorPrimaryText: "#fcc501",
};

export const componentsPrimaryTheme = {
  Menu: {
    colorPrimary: "#4D3E6C",
    colorItemText: "#665982",
    colorItemTextHover: "#AFA9BD",
  },
  Typography: {
    colorText: "#ffffff",
    colorTextHeading: "#ffffff",
  },
};
export const LoginContentStyle = {
  height: "100vh",
  backgroundImage: `url(${Bgimg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export const LayoutContentStyle = {
  height: "100vh",
  backgroundImage: `url(${Bgimg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
};
