import { useNavigation } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ButtonCom from "../../Components/ButtonCom";
import FloatingMenu from "../../Components/FloatingButton";
import FormInputs from "../../Components/FormInputs";
import Icons from "../../Constants/Icons";
import Images from "../../Constants/Images";
import { Colors, Sizes } from "../../Constants/Theme";

// SignIn component for user authentication
// It includes input fields for phone number and password
// and a checkbox for terms and conditions
const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [pwd, setPwd] = useState("");
  const [errors, setError] = useState({});
  const handlerror = (errorMessage, input) => {
    setError((prevState) => ({ ...prevState, [input]: errorMessage }));
  };
  // Password Check a special character, uppercase, lowercase and digit
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  // Phone Number check for Nigeria, Ghana, and South Africa
  const ghanaRegex = /^(\+233|0)(24|54|55|59|20|50)\d{7}$/;
  const saRegex = /^(\+27|0)(6|7|8)\d{8}$/;
  const nigeriaRegex = /^(\+234|0)[789][01]\d{8}$/;

  const isValidPhone = (phone) => {
    return (
      ghanaRegex.test(phone) || saRegex.test(phone) || nigeriaRegex.test(phone)
    );
  };

  // Adding + format to phone number and remove the 0 at the front
  const formatPhoneNumber = (phone) => {
    let trimmed = phone.replace(/\s+/g, "").replace(/[^+\d]/g, ""); // remove spaces and special chars

    if (trimmed.startsWith("0")) {
      // Nigeria
      if (nigeriaRegex.test(trimmed)) return "+234" + trimmed.slice(1);
      // Ghana
      if (ghanaRegex.test(trimmed)) return "+233" + trimmed.slice(1);
      // SA
      if (saRegex.test(trimmed)) return "+27" + trimmed.slice(1);
    }

    return trimmed;
  };

  const validate = async () => {
    Keyboard.dismiss();
    let valid = true;

    if (!name.trim()) {
      handlerror("Please input full name", "name");
      valid = false;
    }
    if (!email) {
      handlerror("Please input email", "email");
      valid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@(gmail|outlook|yahoo)\.com$/.test(email)) {
      handlerror("Invalid email format", "email");
      valid = false;
    }
    if (!phone) {
      handlerror("Please input phone number", "phone");
      valid = false;
    } else if (!isValidPhone(phone)) {
      handlerror(
        "Enter a valid Ghana, South Africa, or Nigeria phone number",
        "phone"
      );
      valid = false;
      console.log("Phone entered:", phone);
      console.log("Cleaned length:", phone.replace(/\D/g, "").length);
      console.log("Valid phone:", isValidPhone(phone));
    } else if (phone.replace(/\D/g, "").length < 10) {
      handlerror("Phone number must have at least 10 digits", "phone");
      valid = false;
    }

    if (!pwd) {
      handlerror("Please input password", "pwd");
      valid = false;
    } else if (!passwordRegex.test(pwd)) {
      handlerror(
        "Password must be at least 8 characters, include uppercase, lowercase, number and special character.",
        "pwd"
      );
      valid = false;
    }

    if (valid) {
      await saveUserData(); // Save to local storage
      const formattedPhone = formatPhoneNumber(phone);
      const payload = {
        name,
        email,
        phone: formattedPhone,
        password: pwd,
      };
      console.log("Valid form. Proceeding with data:", payload);
      // You can send `payload` to API here
      await SecureStore.setItemAsync("isLoggedInOnce", "true");

    }
  };
  
  // Saving in Local Storage
  const saveUserData = async () => {
    try {
      const userData = {
        name,
        email,
        phone,
        password: pwd,
      };
      await SecureStore.setItemAsync("userData", JSON.stringify(userData));
      console.log("User data saved to AsyncStorage.");
    } catch (error) {
      console.log("Error saving user data: ", error);
    }
  };
  // Clear form
  useEffect(() => {
    setName("");
    setPhone("");
    setEmail("");
    setPwd("");
  },[]);

  // Getting the Data from storage
  // Load user data on mount
  useEffect(() => {
    getUserData();
  }, []);

  // Function to load user data from AsyncStorage
  const getUserData = async () => {
    try {
      const jsonValue = await SecureStore.getItemAsync("userData");
      if (jsonValue != null) {
        const user = JSON.parse(jsonValue);
        setName(user.name || "");
        setEmail(user.email || "");
        setPhone(user.phone || "");
        setPwd(user.password || "");
        console.log("Retrieved user:", user);
      }
    } catch (error) {
      console.log("Error reading user data: ", error);
    }
  };

  const navigation = useNavigation();

  // Navigate to SignIn screen when the component mounts
  const [uncheck, setCheck] = useState(false);
  return (
    <View style={styles.Page}>
      <Image
        source={require("../../assets/images/project/hwB logo.png")}
        style={{
          alignSelf: "center",
          height: Sizes.IconsSizeHeight,
          width: Sizes.IconsSizeWidth,
          marginTop: Sizes.height * 0.08,
        }}
      />
      <View>
        <Text style={styles.HeaderText}> Welcome!</Text>
        <Text style={styles.subHeaderText}>
          Please provide the following details {"\n"} for your new account
        </Text>
        <View style={{ alignItems: "center", marginTop: Sizes.height * 0.05 }}>
          <FormInputs
            image={Images.PersonIcon}
            placeHolder={"Full Name"}
            keyboard={"default"}
            value={name}
            onChangeText={setName}
            error={errors.name}
            onFocus={() => {
              handlerror(null, "name");
            }}
          />
          <FormInputs
            image={Images.email}
            placeHolder={"E-mail"}
            keyboard={"email-address"}
            value={email}
            onChangeText={setEmail}
            error={errors.email}
            onFocus={() => {
              handlerror(null, "email");
            }}
          />
          <FormInputs
            image={Icons.phone}
            placeHolder={"Phone Number"}
            keyboard={"number-pad"}
            value={phone}
            onChangeText={setPhone}
            error={errors.phone}
            onFocus={() => {
              handlerror(null, "phone");
            }}
          />
          <FormInputs
            image={Icons.Lock}
            placeHolder={"Password"}
            keyboard={"visible-password"}
            image1={Icons.eyeClosed}
            image2={Icons.eyeOpen}
            value={pwd}
            onChangeText={setPwd}
            error={errors.pwd}
            onFocus={() => {
              handlerror(null, "pwd");
            }}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: Sizes.height * 0.01,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => setCheck(!uncheck)}>
            <Image
              source={uncheck ? Icons.signUpCheckedBox : Icons.signUpCheckBox}
              style={{
                height: uncheck ? 40 : 25,
                width: 25,
                alignSelf: "flex-start",
              }}
            />
          </TouchableOpacity>
          <Text style={styles.remText}>
            By creating your account you agree to our Terms{"\n"}
            and Conditions and Policies
          </Text>
        </View>
      </View>
      <ButtonCom onPress={validate} text={"Sign Up"} />

      <FloatingMenu
        image1={Icons.whiteWhatsapp}
        image2={Icons.phone}
        image3={Icons.chatbot}
        PopText1={"WhatsApp"}
        PopText2={" Call"}
        PopText3={"Mail"}
      />
      {/* <TouchableOpacity style={styles.QueIcon}>
        <Image source={Images.questionMark} style={{ width: 15, height: 25 }} />
      </TouchableOpacity> */}
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  Page: {
    flex: 1,
    backgroundColor: Colors.Background,
    paddingHorizontal: Sizes.width * 0.05,
  },
  HeaderText: {
    fontSize: Sizes.h1,
    fontFamily: "GeneralSans-Semibold",
    textAlign: "center",
    fontWeight: "700",
    marginTop: Sizes.height * 0.04,
  },
  subHeaderText: {
    textAlign: "center",
    marginTop: Sizes.height * 0.01,
    fontSize: Sizes.h6,
    fontFamily: "GeneralSans-Regular",
  },
  remText: {
    fontSize: Sizes.h7,
    fontFamily: "GeneralSans-Regular",
    marginLeft: Sizes.width * 0.02,
  },
  belowText: {
    fontSize: Sizes.h7,
    fontFamily: "GeneralSans-Regular",
    marginTop: Sizes.width * 0.01,
  },
  SignUpText: {
    fontFamily: "GeneralSans-Regular",
    fontSize: Sizes.h6,
    fontWeight: "600",
    marginTop: Sizes.height * 0.035,
  },
  // QueIcon: {
  //   backgroundColor: Colors.primary,
  //   width: 50,
  //   height: 50,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   borderRadius: 40,
  //   marginTop: Sizes.height * 0.035,
  //   alignSelf: "flex-end",
  //   elevation:10
  // },
});
