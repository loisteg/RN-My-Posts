import { useEffect, useState, useRef } from 'react'
import { View, Text, StyleSheet, TextInput, Button, ScrollView, TouchableNativeFeedback , TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';
import { PhotoPicker } from '../components/PhotoPicker';

import { header } from '../helpers/header';
import { addPost } from '../store/actions/post';
import { THEME } from '../theme';

export const CreateScreen = ({navigation: {setOptions, toggleDrawer, navigate}}) => {
  const [text, setText] = useState('');
  const imageRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setOptions(
      header(
        {title: 'Create post', 
        drawer: {onPress: toggleDrawer}
      }));
  }, []);

  const saveHandler = () => {
    const post = {
      text,
      date: new Date().toJSON(),
      img: imageRef.current,
      booked: false,
    }
    dispatch(addPost(post));
    setText('');
    navigate('MainScreen');
  };

  const photoPickHandler = (uri) => {
    imageRef.current = uri;
  }

  return (
    <ScrollView>
      <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Create a new post</Text>
          <TextInput 
            style={styles.textArea} 
            placeholder={'Post name'}
            value={text}
            onChangeText={setText}
            multiline
          />
          <PhotoPicker onPick={photoPickHandler}/>
          <Button 
            title="Create post" 
            color={THEME.MAIN_COLOR} 
            onPress={saveHandler}
            disabled={!text.trim()}
            />
        </View>
      </TouchableNativeFeedback>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: "montserrat-regular"
  },
  textArea: {
    padding: 10,
    marginBottom: 10,
  }
})
