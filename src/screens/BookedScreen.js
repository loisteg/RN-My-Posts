import { useEffect } from "react";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostList } from "../components/PostList";
import { DATA } from "../data";


export const BookedScreen = ({ navigation: { navigate, setOptions } }) => {
  useEffect(() => {
    setOptions({
      title: "Bookmarked",
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

  const data = DATA.filter(item => item.booked);

  return <PostList data={data} onOpen={openPostHandler} />
};
