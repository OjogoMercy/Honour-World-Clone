import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;

export const Colors = {
  primary: "#2F75FD", //blue
  secondary: "#0F48B8", //dark-blue
  green: "#27ae60",
};

export const Sizes = {
  // global sizes
  base: screenHeight * 0.01, //for margin
  font: screenHeight * 0.0175, //basic font size
  radius: 5, //fixed borderRadius
  padding: screenHeight * 0.02, //for padding
  profileBorder: screenHeight * 0.5,
  profileHeight: screenHeight * 0.06,
  profileWidth: screenWidth * 0.13,

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
  body1: screenHeight * 0.0355,
  body2: screenHeight * 0.025,
  body3: screenHeight * 0.02,
  body3a: screenHeight * 0.02,
  body3b: screenHeight * 0.022,
  body4: screenHeight * 0.0175,
  body5: screenHeight * 0.015,
  body6: screenHeight * 0.01,
  intro: screenHeight * 0.04,

  // app dimensions
  width,
  height,
};

// default colors

// export const Fontfamilies = {
//     // custom fonts
//     regular: "GeneralSans-Regular",
//     medium: "Poppins-Medium",
//     semiBold: "Poppins-SemiBold",
//     bold: "Bold",
//     light: "Poppins-Light",
//     extraLight: "Poppins-ExtraLight",
// }

const appTheme = [Colors, Sizes];
export default appTheme;
