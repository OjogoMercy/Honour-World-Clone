import React from 'react';
import { View, Text, Image, StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Colors from '@/Src/Constants/Colors';
import Images from '@/Src/Constants/Images';
import { Sizes, SCREEN_WIDTH, SCREEN_HEIGHT } from "../../Constants/Theme"
import { useNavigation } from 'expo-router';


const slides = [
  {
    key: '1',
    title: 'Buy Cheap and Affordable ',
    highlight: 'Mobile Data',
    text: 'Get data of all networks to keep surfing the internet.',
    image: Images.slide1,
  },
  {
    key: '2',
    title: 'Pay for ',
    highlight: 'Utility Bills',
    line2: 'Seamlessly',
    text: 'Purchase different subscriptions for different cable/TV providers',
    image: Images.slide2,
  },
  {
    key: '3',
    title: 'Swap',
    highlight: 'Airtime to Cash',
    line2: 'On-The-Go',
    text: 'Recharged excess? Be Calm! You can convert your airtime to cash easily',
    image: Images.slide3,
  },
];

const IntroSlider = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
        <View style = {styles.body}>
         <View 
          style={{
            alignSelf: 'center',
            padding: 20,
            borderRadius: 20,
          }}
        >
          <Image
            source={item.image}
            style={{ height: 250, width: 250 }}
            resizeMode="contain"
          />
        </View>
        <View style = {{marginBottom:90 }}>
        <View style={{ height: SCREEN_HEIGHT * 0.12, width: SCREEN_WIDTH * 0.75, alignSelf: 'center' }}>
          <Text style={{ fontSize: Sizes.h1, fontWeight: 'bold', textAlign: 'center', color:Colors.Black }}>
            {item.title}
            <Text style={{ color: Colors.primary }}> {item.highlight}</Text>
            {item.line2 && <Text> {item.line2}</Text>}
          </Text>
        </View>
        <View style={{ height: 60, width: 260, alignSelf: 'center' }}>
          <Text style={{ fontSize: Sizes.h3, textAlign: 'center' }}>{item.text}</Text>
        </View>
        </View>
        </View>
      </SafeAreaView>
   
    );
  };

  const onDone = () => {
    navigation.navigate('helpsam');
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      onDone={onDone}
      showSkipButton={false}
      showNextButton={true}
      nextLabel="Next"
      doneLabel="Get Started"
      activeDotStyle={{ backgroundColor: Colors.primary, width: 30,marginBottom:10 }}
      dotStyle={{ backgroundColor:"#CDE1FF", marginBottom:10 }}
       renderNextButton={() => (
        <View style={styles.nextButton}>
          <Text style={{ color: Colors.primary,fontWeight: '600',textAlign:"center"}}>Next</Text>
        </View>
      )}
      renderDoneButton={() => (
        <View style={styles.getStartedButton}>
          <Text style={{ color:Colors.White,fontWeight: '600',textAlign:"center"}}>Get Started</Text>
        </View>
        
      )}
      bottomButton
    />
  );
};

export default IntroSlider;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  backgroundBox: {
    position: 'absolute',
    top: 100,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.85,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: Colors.White,
    padding: Sizes.padding,
    alignItems: "center",
  },
  inter: {
    marginTop: 500,
  },
  activityIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  dots: {
    flexDirection: 'row',
    gap: 6,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 12,
  },
  nextButton: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 150,
    backgroundColor: Colors.White,
    marginRight: 10,
    alignSelf:"center",
    marginBottom:50
  },
  getStartedButton: {
    backgroundColor: Colors.primary,
    width: 150,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf:"center",
    marginBottom:50
  },
  body:{
     backgroundColor: 'white',
    height: SCREEN_HEIGHT *0.9,
    borderTopLeftRadius: 40,
    paddingHorizontal: 45,
     justifyContent: 'center',
    borderTopRightRadius: 40,
    marginTop:70,
    paddingBottom:50
  }
});
