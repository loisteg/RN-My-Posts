import { useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { Post } from "../components/Post";
import { DATA } from "../data";

export const MainScreen = ({ navigation: { navigate, setOptions } }) => {
  useEffect(() => {
    setOptions({
      title: "My blog",
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="Add photo"
            iconName="ios-camera"
            onPress={() => console.log("Press photo")}
          />
        </HeaderButtons>
      ),
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title="Toggle Drawer"
            iconName="ios-menu"
            onPress={() => console.log("Press drawer")}
          />
        </HeaderButtons>
      ),
    });
  }, []);

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
