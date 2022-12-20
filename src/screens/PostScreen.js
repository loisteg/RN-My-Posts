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

import { DATA } from "../data";
import { THEME } from "../theme";

import { header } from "../helpers/header";

export const PostScreen = ({ navigation: { setOptions }, route }) => {
  const postId = route.params?.postId;
  const post = DATA.find((p) => p.id === postId);

  useEffect(() => {
    const iconName = post.booked ? "ios-star" : "ios-star-outline";

    setOptions(
      header({
        title: `Post from ${new Date(post.date).toLocaleDateString()}`,
        bookmarked: {iconName, onPress: () => console.log("Bookmarked")}
      }));
  }, []);

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
          onPress: () => console.log("Yes"),
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
