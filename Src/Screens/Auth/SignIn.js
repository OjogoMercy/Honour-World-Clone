import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../Constants/Theme";
const SignIn = () => {
  return (
    <View style={styles.Page}>
      <Text>SignIn</Text>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
});
