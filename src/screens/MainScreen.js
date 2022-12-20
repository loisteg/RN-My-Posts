import { useEffect } from "react";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostList } from "../components/PostList";
import { DATA } from "../data";

import { header } from "../helpers/header";

export const MainScreen = ({ navigation: {navigate, setOptions, toggleDrawer} }) => {
  useEffect(() => {
    setOptions(
      header(
        {title: 'My blog', 
        photo: {onPress: () => navigate('CreateScreen')},
        drawer: {onPress: toggleDrawer}
      }));
  }, []);

  const openPostHandler = (post) => {
    navigate('PostScreen', { postId: post.id });
  };

  return <PostList data={DATA} onOpen={openPostHandler} />
};
