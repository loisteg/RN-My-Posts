import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { header } from '../helpers/header';

export const AboutScreen = ({navigation: {navigate, setOptions, toggleDrawer}}) => {
  useEffect(() => {
    setOptions(
      header(
        {title: 'About app', 
        drawer: {onPress: toggleDrawer}
      }));
  }, []);
  
  return (
    <View style={styles.center}>
      <Text style={styles.text}>This app is for your personal posts</Text>
      <Text style={styles.text}>Version <Text style={styles.version}>1.0.0</Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'montserrat-regular'
  },
  version: {
    fontFamily: 'montserrat-bold',
  }
})
