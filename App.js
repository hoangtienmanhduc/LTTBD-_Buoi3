import { Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import { Button } from "@react-native-material/core";

export default function App() {
  return (
    <View style={styles.main}>
    <ImageBackground source={require('./img/background.png')} style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('./img/circle.png')}
      />
      <Text style={styles.lable}>GROW {"\n"}YOUR BUSINESS</Text>
      <Text style={styles.text}>We will help you to grow your business using online server</Text>
      <View style={styles.btn}>
          <Button text='loggin' title="LOGIN" color="#E3C000"/>
          <Button text='Sign up'title="SIGN UP" color="#E3C000"/>
      </View>
      <Text style={styles.text1}>HOW WE WORK?</Text>
    </ImageBackground>
  </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop:30,
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  tinyLogo: {
    marginTop: 60,
  },
  lable: {
    marginTop: 70,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: 'center',
  },
  text: {
    marginTop: 50,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center',
    width: 400,
  },
  btn: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 400,
  },
  text1: {
    marginTop: 50,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: 'center',
    width: 400,
  },
});

