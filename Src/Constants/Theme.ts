import { Dimensions } from "react-native";
import FormInputs from "../Components/FormInputs";
const { width, height } = Dimensions.get("window");

// const screenWidth = Math.round(Dimensions.get("window").width);
// const screenHeight = Math.round(Dimensions.get("window").height);
const screenWidth = Math.round(width);
const screenHeight = Math.round(height);

// export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_WIDTH =width;
export const SCREEN_HEIGHT =height;

export const Colors = {
  primary: "#2F75FD", //blue
  secondary: "#0F48B8", //dark-blue
  green: "#27ae60",
  lightBlue: "#5f97fe", //light blue
  veryLight: "#CDE1FF", //very light blue
  extraLight: "#F0FAFF",
  white: "#FFFFFF", //white
  black: "#000000", //black
  gray: "#808080", //gray
  red:"#b40c0cff"
  dangerRed: "#F92525"
};

export const Sizes = {
  // global sizes
  base: screenHeight * 0.01, //for margin
  font: screenHeight * 0.0175, //basic font size
  radius: screenHeight * 0.02, //fixed borderRadius
  padding: screenHeight * 0.025, //for padding
  profileBorder: screenHeight * 0.5,
  profileHeight: screenHeight * 0.06,
  profileWidth: screenWidth * 0.13,
  tinyIcon: screenHeight * 0.025,
  bigRadius: screenHeight * 0.03,
  smallPadding: screenHeight * 0.007,

  // font sizes
  navTitle: screenHeight * 0.04375,
  h1: screenHeight * 0.0375,
  h2: screenHeight * 0.0275,
  h2a: screenHeight * 0.034,
  h2c: screenHeight * 0.0245,
  h3: screenHeight * 0.0225,
  h3a: screenHeight * 0.0235,
  h4: screenHeight * 0.0175,
  h5: screenHeight * 0.015,
  h6: screenHeight * 0.0135,
  h7: screenHeight * 0.0125,
  h8: screenHeight * 0.0115,
  body1: screenHeight * 0.0355,
  body2: screenHeight * 0.025,
  body3: screenHeight * 0.02,
  body3a: screenHeight * 0.02,
  body3b: screenHeight * 0.022,
  body4: screenHeight * 0.017,
  body5: screenHeight * 0.015,
  body6: screenHeight * 0.01,
  intro: screenHeight * 0.04,
  tinyText: screenHeight * 0.012,

  // app dimensions
  width,
  height,
};

// default colors

export const Fontfamilies = {
    // custom fonts
    regular: "GeneralSans-Regular",
    medium: "Poppins-Medium",
    semiBold: "Poppins-SemiBold",
    bold: "Bold",
    light: "Poppins-Light",
    extraLight: "Poppins-ExtraLight",
}

const appTheme = [Colors, Sizes];
export default appTheme;
