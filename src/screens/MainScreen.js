import { useEffect } from "react";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostList } from "../components/PostList";
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

  return <PostList data={DATA} onOpen={openPostHandler} />
};
