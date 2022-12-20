import { useEffect } from "react";

import { PostList } from "../components/PostList";
import { DATA } from "../data";

import { header } from "../helpers/header";


export const BookedScreen = ({ navigation: { navigate, setOptions, toggleDrawer } }) => {
  useEffect(() => {
    setOptions(
      header(
        {title: 'Bookmarked',
        drawer: {onPress: toggleDrawer}
      }))
  }, []);

  const openPostHandler = (post) => {
    navigate("PostScreen", { postId: post.id });
  };

  const data = DATA.filter(item => item.booked);

  return <PostList data={data} onOpen={openPostHandler} />
};
