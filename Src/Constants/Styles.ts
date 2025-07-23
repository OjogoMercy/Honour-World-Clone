import { StyleSheet } from "react-native";
import Colors from "./Colors";
import { Sizes, SCREEN_WIDTH, SCREEN_HEIGHT } from '../Constants/Theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.White,
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
    backgroundColor: Colors.White,
    marginRight: 10,
  },
  getStartedButton: {
    backgroundColor: Colors.primary,
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
});
export default styles