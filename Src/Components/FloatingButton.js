import { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors, Sizes } from "../Constants/Theme";
const { width, height } = Dimensions.get("window");

const FloatingMenu = ({ image1, image2, image3, PopText1,PopText2,PopText3 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    Animated.timing(animation, {
      toValue: isOpen ? 0 : 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  // Animated styles
  const menuTranslateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [20, 0], // Slide up
  });

  const menuOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1], // Fade in
  });
  const overlayOpacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.5], // Darken background
  });

  return (
    <View style={StyleSheet.absoluteFill}>
      {/* Overlay */}
      {isOpen && (
        <TouchableOpacity
          style={StyleSheet.absoluteFill}
          activeOpacity={1}
          onPress={toggleMenu}
        >
          <Animated.View
            style={[styles.overlay, { opacity: overlayOpacity }]}
          />
        </TouchableOpacity>
      )}

      <View style={styles.container}>
        {/* Menu Items */}
        <Animated.View
          style={[
            styles.menu,
            {
              opacity: menuOpacity,
              transform: [{ translateY: menuTranslateY }],
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                backgroundColor: Colors.lightBlue,
                padding: 5,
                borderRadius: 5,
                marginRight: Sizes.width * 0.05,
                height: 50,
                width: 150,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 30,
              }}
            >
              <Text
                style={{
                  width: 100,
                  color: Colors.secondary,
                  textAlign: "center",
                  fontWeight: "bold",
                   fontFamily: "GeneralSans-regular",
                }}
              >
                 {PopText1}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => console.log("Option 1")}
            >
              <Image source={image1} style={styles.Img} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                backgroundColor: Colors.lightBlue,
                padding: 5,
                borderRadius: 5,
                marginRight: Sizes.width * 0.05,
                height: 50,
                width: 100,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 30,
              }}
            >
              <Text
                style={{
                  width: 100,
                  color: Colors.secondary,
                  textAlign: "center",
                  fontWeight: "bold",
                   fontFamily: "GeneralSans-regular",
                }}
              >
                {PopText2}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => console.log("Option 1")}
            >
              <Image source={image2} style={styles.Img} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                backgroundColor: Colors.lightBlue,
                padding: 5,
                borderRadius: 5,
                marginRight: Sizes.width * 0.05,
                height: 50,
                width: 100,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 30,
                
              }}
            >
              <Text
                style={{
                  width: 100,
                  color: Colors.secondary,
                  textAlign: "center",
                  fontWeight: "bold",
                  fontFamily: "GeneralSans-regular",
                }}
              >
                {PopText3}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => console.log("Option 1")}
            >
              <Image source={image3} style={styles.Img} />
            </TouchableOpacity>
          </View>
        </Animated.View>

        <TouchableOpacity style={styles.fab} onPress={() => toggleMenu()}>
          <Text style={styles.fabText}>{isOpen ? "×" : "?"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FloatingMenu;
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: Sizes.height * 0.05,
    right: Sizes.width * 0.05,
    alignItems: "flex-end",
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: Colors.secondary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 6.27,
    elevation: 10,
  },
  fabText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  menu: {
    marginBottom: 10,
    alignItems: "flex-end",
    zIndex: 2,
  },
  menuItem: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: Colors.secondary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 6.27,
    elevation: 5,
    marginBottom: 10,
  },
  menuText: {
    fontSize: 16,
    color: "#333",
  },
  overlay: {
    position: "absolute",
    width: width,
    height: height,
    backgroundColor: Colors.white,
    zIndex: 1,
  },
  Img: {
    height: 30,
    width: 30,
    tintColor: Colors.white,
  },
});
