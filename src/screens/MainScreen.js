import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { Post } from "../components/Post";
import { DATA } from "../data";

export const MainScreen = ({ navigation: { navigate } }) => {
  const openPostHandler = (post) => {
    navigate("PostScreen", { postId: post.id });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
