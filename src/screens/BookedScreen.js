import { useEffect } from "react";
import { useSelector } from "react-redux";

import { PostList } from "../components/PostList";

import { header } from "../helpers/header";

export const BookedScreen = ({ navigation: { navigate, setOptions, toggleDrawer } }) => {
  const bookedPosts = useSelector(state => state.post.bookedPosts);

  useEffect(() => {
    setOptions(
      header(
        {title: 'Bookmarked',
        drawer: {onPress: toggleDrawer}
      }))
  }, []);

  const openPostHandler = (post) => {
    navigate('PostScreen', { postId: post.id, screenFrom: 'BookedScreen' });
  };

  return <PostList data={bookedPosts} onOpen={openPostHandler} />
};
