import { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native';

import { header } from '../helpers/header';

export const CreateScreen = ({navigation: {setOptions, toggleDrawer}}) => {
  useEffect(() => {
    setOptions(
      header(
        {title: 'Create post', 
        drawer: {onPress: toggleDrawer}
      }));
  }, []);

  return (
    <View style={styles.center}>
      <Text>CreateScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
