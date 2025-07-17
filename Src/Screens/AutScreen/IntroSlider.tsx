import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import Colors from '@/Src/Constants/Colors';
import Images from '@/Src/Constants/Images';
import { useNavigation } from 'expo-router';
import { Sizes, SCREEN_WIDTH, SCREEN_HEIGHT } from "../../Constants/Theme";
import styles from '@/Src/Constants/Styles';

const slides = [
  {
    key: 1,
    line1: 'Buy Cheap and Affordable ',
    Highlight: 'Mobile Data',
    text: 'Get data of all networks to keep surfing the internet.',
    image: Images.slide1,
  },
 {
    key: 2,
    line1: 'Pay for ',
    Highlight: 'Utility Bills    ',
    line2: 'Seamlessly',
    text: 'Purchase different subscriptions for different cable/TV providers',
    image: Images.slide2,
  },
  {
    key: 3,
    Highlight:' Airtime to Cash   ',
    line2: 'On-The-Go',
    line1: 'Swap',
    text: 'Recharged excess? Be Calm! You can convert your airtime to cash easily',
    image: Images.slide3,
  },
];

const IntroSlider = () => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (activeIndex < slides.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const renderSlideContent = () => {
    const current = slides[activeIndex];
    return (
      <View>
        <Image
          source={current.image}
          style={{ height: 250, width: 250, alignSelf: "center", marginTop:20 }}
        />
        <View style={{ height: 80, width: 300, alignSelf: "center" }}>
          <Text style={{ fontSize: Sizes.h1, fontWeight: "bold", textAlign: "center" }}>
            {current.line1}<Text style = {{color:Colors.primary}}>{current.Highlight}</Text><Text>{current.line2}</Text>
          </Text>
        </View>
        <View style={{ height: 50, width: 220, alignSelf: "center" }}>
          <Text style={{ fontSize: Sizes.h4, textAlign: "center" }}>{current.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundBox}>{renderSlideContent()}</View>

      <View style={styles.inter}>
        <View style={styles.activityIndicator}>
          <View style={styles.dots}>
            {slides.map((_, index) => {
              const isActive = activeIndex === index;
              return (
                <View
                  key={index}
                  style={{
                    width: isActive ? 30 : 8,
                    height: 6,
                    borderRadius: 7,
                    backgroundColor: isActive ? Colors.primary : "#CDE1FF",
                  }}
                />
              );
            })}
          </View>
        </View>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.getStartedButton}>
          <Text style={styles.startedText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IntroSlider;


