import React, { use, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import Colors from '@/Src/Constants/Colors'
import Images from '@/Src/Constants/Images'
import { useNavigation } from 'expo-router';
import Theme, { Sizes, SCREEN_WIDTH, SCREEN_HEIGHT } from "../../Constants/Theme"
import Icons from '@/Src/Constants/Icons'


const IntroSlider = () => {
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);


  const renderSlideContent = () => {
    switch(activeIndex) {
      case 0:
        return(
          <View>
            <View style={styles.box2}>
          <View style={styles.circle}>
                  <View style = {styles.white}></View>
                   <View style = {styles.brbox2}>
                    <View style = {styles.box3}>
                      <View style = {styles.box4}>
                   <Text>{slides[activeIndex]?.dec}</Text>
                   
              <Image
              source={Icons.dropdown}
              style = {{height:15, width:15}}
              />
                      </View>
                      <View style = {styles.box5}>
                        <View style = {{flexDirection:"row"}}>
                <View style = {{height:15, width:15, borderRadius:15, backgroundColor:'#F21016', justifyContent:"center", alignItems:"center"}}> <Image
              source={slides[activeIndex].Airtel}
              style = {{height:10, width:10}}
              /> </View>
                <Text style = {{marginLeft:10}}>{slides[activeIndex]?.d1}</Text>
           </View>
             <Image
              source={Icons.circle}
              style = {{height:15, width:15}}
              />
                      </View>

                    <View style = {styles.box5}>
                        <View style = {{flexDirection:"row"}}>
                 <Image
              source={slides[activeIndex].Mtn}
              style = {{height:15, width:15}}
              />
                <Text style = {{marginLeft:10}}>{slides[activeIndex]?.d2}</Text>
           </View>
             <Image
              source={Icons.check}
              style = {{height:15, width:15}}
              />
                      </View>

                        <View style = {styles.box5}>
                        <View style = {{flexDirection:"row"}}>
                 <Image
              source={slides[activeIndex].Glo}
              style = {{height:15, width:15}}
              />
                <Text style = {{marginLeft:10}}>{slides[activeIndex]?.d3}</Text>
           </View>
             <Image
              source={Icons.circle}
              style = {{height:15, width:15}}
              />
                      </View>

                        <View style = {styles.box5}>
                        <View style = {{flexDirection:"row"}}>
                 <Image
              source={slides[activeIndex].nineMobile}
              style = {{height:15, width:15}}
              />
                <Text style = {{marginLeft:10}}>{slides[activeIndex]?.d4}</Text>
           </View>
             <Image
              source={Icons.circle}
              style = {{height:15, width:15}}
              />
                      </View>
                    </View>
                   </View>

          </View>
            <View style = {{height:80, width:300, alignSelf:"center"}}>
        <Text style = {{fontSize:Sizes.h1, fontWeight:"bold", textAlign:"center"}}>{slides[activeIndex].title}</Text>
         </View>
           <View style = {{height:50, width:220, alignSelf:"center"}}>
          <Text style = {{fontSize:Sizes.h7, textAlign:"center"}}>{slides[activeIndex].text}</Text>
        </View>
        </View>
        </View>
        );

      case 1:
        return(
          <View>
            <View style={styles.box2}>
          <View style={styles.circle}>
                  <View style = {styles.white}></View>
                   <View style = {styles.brbox2}>
                    <View style = {styles.box3}>
                      <View style = {styles.box4}>
                   <Text>{slides[activeIndex]?.dec}</Text>
                   
              <Image
              source={Icons.dropdown}
              style = {{height:15, width:15}}
              />
                      </View>
                      <View style = {styles.box5}>
                        <View style = {{flexDirection:"row"}}>
                <View style = {{height:15, width:15, borderRadius:15, backgroundColor:'#F21016', justifyContent:"center", alignItems:"center"}}> <Image
              source={slides[activeIndex].Dstv}
              style = {{height:10, width:10}}
              /> </View>
                <Text style = {{marginLeft:10}}>{slides[activeIndex]?.d1}</Text>
           </View>
             <Image
              source={Icons.circle}
              style = {{height:15, width:15}}
              />
                      </View>

                    <View style = {styles.box5}>
                        <View style = {{flexDirection:"row"}}>
                 <Image
              source={slides[activeIndex].gotv}
              style = {{height:15, width:15}}
              />
                <Text style = {{marginLeft:10}}>{slides[activeIndex]?.d2}</Text>
           </View>
             <Image
              source={Icons.check}
              style = {{height:15, width:15}}
              />
                      </View>

                        <View style = {styles.box5}>
                        <View style = {{flexDirection:"row"}}>
                 <Image
              source={slides[activeIndex].ikedc}
              style = {{height:15, width:15}}
              />
                <Text style = {{marginLeft:10}}>{slides[activeIndex]?.d3}</Text>
           </View>
             <Image
              source={Icons.circle}
              style = {{height:15, width:15}}
              />
                      </View>

                        <View style = {styles.box5}>
                        <View style = {{flexDirection:"row"}}>
                 <Image
              source={slides[activeIndex].phedc}
              style = {{height:15, width:15}}
              />
                <Text style = {{marginLeft:10}}>{slides[activeIndex]?.d4}</Text>
           </View>
             <Image
              source={Icons.circle}
              style = {{height:15, width:15}}
              />
                      </View>
                    </View>
                   </View>

          </View>
            <View style = {{height:80, width:300, alignSelf:"center"}}>
        <Text style = {{fontSize:Sizes.h1, fontWeight:"bold", textAlign:"center"}}>{slides[activeIndex].title}</Text>
         </View>
           <View style = {{height:50, width:220, alignSelf:"center"}}>
          <Text style = {{fontSize:Sizes.h7, textAlign:"center"}}>{slides[activeIndex].text}</Text>
        </View>
        </View>
        </View>
        );
      case 2:
        return(
          <View>
              <View style={styles.box2}>
          <View style={styles.circle}>
                  <View style = {styles.white}></View>
                   <View style = {styles.brbox2}>
                    <View style = {styles.box3}>
                      <View style = {{height:50, width:100}}>
                   <Text style = {{fontSize: Sizes.h3, fontWeight:"bold"}}>Select your network</Text>
                    <View style = {{flexDirection:'row', justifyContent:"space-between"}}>
                   <View style = {{height:35, width:35, backgroundColor:"#F8FCFF", justifyContent:"center", alignItems:"center"}}>
                         <View style = {{height:25, width:25, backgroundColor:"#F21016", borderRadius:20, justifyContent:"center", alignItems:"center"}}>
                    <Image
                    source={slides[activeIndex].Airtel}
                    style = {{height:15, width:15}}
                    />
                   </View>
                   </View>
                    <View style = {{height:35, width:35, backgroundColor:"#F8FCFF", justifyContent:"center", alignItems:"center"}}>    
                    <Image
                    source={slides[activeIndex].Mtn}
                    style = {{height:25, width:25}}
                    />
                   </View>

                    <View style = {{height:35, width:35, backgroundColor:"#F8FCFF", justifyContent:"center", alignItems:"center"}}>    
                    <Image
                    source={slides[activeIndex].Glo}
                    style = {{height:25, width:25}}
                    />
                   </View>

                    <View style = {{height:35, width:35, backgroundColor:"#F8FCFF", justifyContent:"center", alignItems:"center"}}>    
                    <Image
                    source={slides[activeIndex].nineMobile}
                    style = {{height:25, width:25}}
                    />
                   </View>
                   </View>
                   <Text style = {{fontSize:Sizes.h4, fontWeight:"bold", marginVertical:7}}>Sender Number</Text>
                   <View style = {{height:30, width:159, backgroundColor:"#F8FCFF"}}>
                    <View style = {{height:30, width:70}}><Text style = {{fontSize:10}}>Enter phone number</Text></View>
                   </View>

                   <Text style = {{fontSize:Sizes.h4, fontWeight:"bold"}}>Sender Bank</Text>
                    <View style = {{height:30, width:159, backgroundColor:"#F8FCFF"}}>
                    <View style = {{height:30, width:70}}><Text style = {{fontSize:10}}>Access bank</Text></View>
                   </View>
                    <View style = {{height:30, width:159, backgroundColor:"#F8FCFF", marginVertical:6}}>
                    <View style = {{height:30, width:80}}><Text style = {{fontSize:10}}>Enter your account number</Text></View>
                   </View>
                   
                  
                      </View>
                    </View>
                   </View>

          </View>
            <View style = {{height:80, width:300, alignSelf:"center"}}>
        <Text style = {{fontSize:Sizes.h1, fontWeight:"bold", textAlign:"center"}}>{slides[activeIndex].title}</Text>
         </View>
           <View style = {{height:50, width:220, alignSelf:"center"}}>
          <Text style = {{fontSize:Sizes.h4 , textAlign:"center"}}>{slides[activeIndex].text}</Text>
        </View>
        </View>
          </View>
        );
      case 3:
        return(
          <View></View>
        );
      default:
        return(
          null
        );
    }
  }

  const totalSlides = 4;

  const slides = [
  {
    key: 1,
    title: 'Buy Cheap and Affordable Mobile Data',
    text: 'Get data of all networks to keep surfing the internet.',
    Mtn: Images.MTN,
    Airtel: Images.airtel,
    Glo: Images.glo,
    nineMobile: Images.nineMobile,
    dec:"Data", d1:"Airtel", d2:'MTN', d3:"GLO", d4:'9mobile',
    mobile: Images.glo,
    check : Icons.check,
    color:'#F21016',
    mark :Icons.circle,
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Pay for Utility Bills Seamlessly',
    text: 'Purchase different subscriptions for different cable/TV providers',
    image: Images.icon,
    check : Icons.check,
    mark :Icons.circle,
    dec:"Data", 
    gotv:Images.gotv,
    ikedc: Images.fire,
    phedc:Images.phedc,
    Dstv: Images.dstv,
    dec:"Utility bils",d1:"Airtel", d2:'MTN', d3:"GLO", d4:'9mobile',
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Swap Airtime to Cash On-The-Go',
    Mtn: Images.MTN,
    Airtel: Images.airtel,
    Glo: Images.glo,
    nineMobile: Images.nineMobile,
    text: 'Recharged excess? Be Calm! You can convert your airtime to cash easily',
    image: Images.icon,
    backgroundColor: '#22bcb5',
  }

];

  const handleNext = () => {
    if (activeIndex < totalSlides - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
    <View style={styles.backgroundBox}>
       {renderSlideContent()}
         </View>
         <View style = {styles.inter}>
      <View style={styles.activityIndicator}>
       
      <View style={styles.dots}>
  {[...Array(totalSlides)].map((_, index) => {
    const isActive = activeIndex === index;
    return (
      <View
        key={index}
        style={{
          width: isActive ? 30 : 8,
          height: isActive ? 6 : 6,
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
        <TouchableOpacity style={styles.getStartedButton} onPress={() =>navigation.navigate('')}>
          <Text style={styles.startedText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  activityIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
 
  dots: {
    flexDirection: 'row',
    gap: 6,
  },
  activeDot: {
    backgroundColor: Colors.primary,
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
    backgroundColor: Colors.White,
    marginRight: 10,
  },
  getStartedButton: {
    backgroundColor:Colors.primary,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  nextText: {
    color: Colors.primary,
    fontWeight: '600',
  },
  startedText: {
    color: '#fff',
    fontWeight: '600',
  },
 backgroundBox: {
  position: 'absolute',
  top: 100,
  left: 0,
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT * 0.85,
  borderTopLeftRadius:30,
  borderTopRightRadius:30,
  backgroundColor: Colors.White,
  padding:Sizes.padding,
  alignItems:"center"
},
  box2:{
    height: SCREEN_HEIGHT * 0.5,
    width:SCREEN_WIDTH * 0.85,
    backgroundColor:Colors.White,
    marginTop:20
  },
  circle:{
    height:SCREEN_HEIGHT * 0.4,
    width:SCREEN_WIDTH * 0.7,
    borderRadius:150,
    backgroundColor:Colors.primary,
    alignSelf:"center"
  },
  inter:{
    marginTop:500
  },
   white:{
    height:30,
    width:"100%",
    backgroundColor:"white",
    position:"absolute",
    bottom:0
    },
    brbox2:{
    backgroundColor:"#BEC7D3",
    height:250,
    width:200,
    alignSelf:"center",
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    borderBottomLeftRadius:40,
    borderBottomRightRadius:40
  },
   box3:{
     backgroundColor:"white",
     marginTop:10,
    height:240,
    width:180,
    alignSelf:"center",
     borderTopLeftRadius:10,
    borderTopRightRadius:10,
    padding:13
  },
  box4:{
      height: 40,
      backgroundColor:"#DEEBFF",
      justifyContent:"space-between",
      padding:10,
      flexDirection:"row",
    },
       box5:{
      height: 40,
      backgroundColor:"#F8FCFF",
      justifyContent:"space-between",
      padding:10,
      flexDirection:"row",
      marginVertical:2
    },
    titletext:{
      fontSize:Sizes.h2,
      fontWeight:"bold"
    }
});
