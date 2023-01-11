import { useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Button,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { header } from "../helpers/header";
import { toogleBooked, deletePost } from "../store/actions/post";

import { THEME } from "../theme";

export const PostScreen = ({ navigation: { setOptions, navigate }, route }) => {
  const {postId, screenFrom} = route?.params;
  const post = useSelector(state => state.post.allPosts.find(p => p.id === postId));
  const dispatch = useDispatch();

  const booked = useSelector(state => state.post.bookedPosts.some(post => post.id === postId));

  useEffect(() => {
    const iconName = booked ? "ios-star" : "ios-star-outline";

    setOptions(
      header({
        title: `Post from ${new Date(post.date).toLocaleDateString()}`,
        bookmarked: {iconName, onPress: () => dispatch(toogleBooked(post))}
      }));
  }, [post, booked]);

  const removeHandler = () => {
    Alert.alert(
      `Deleting post #${postId}`,
      "Do you want to delete this post?",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          style: "destructive",
          onPress: () => {
            navigate(screenFrom);
            dispatch(deletePost(postId));
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: post.img }} />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{post.text}</Text>
      </View>

      <Button
        title="Delete"
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  textWrapper: {
    padding: 10,
  },
  title: {
    fontFamily: "montserrat-regular",
  },
});
