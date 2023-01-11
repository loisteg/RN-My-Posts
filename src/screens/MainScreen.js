import { useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { PostList } from "../components/PostList";

import { header } from "../helpers/header";
import { loadPosts } from "../store/actions/post";
import { THEME } from "../theme";

export const MainScreen = ({ navigation: {navigate, setOptions, toggleDrawer} }) => {
  const {loading, allPosts} = useSelector(state => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    setOptions(
      header(
        {title: 'My blog', 
        photo: {onPress: () => navigate('CreateScreen')},
        drawer: {onPress: toggleDrawer}
      })
    );
    
    dispatch(loadPosts());
  }, [dispatch]);

  const openPostHandler = (post) => {
    navigate('PostScreen', { postId: post.id, screenFrom: 'MainScreen' });
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={THEME.MAIN_COLOR}/>
     </View>
    )
  }

  return <PostList data={allPosts} onOpen={openPostHandler} />
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }
})