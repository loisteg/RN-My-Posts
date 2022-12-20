
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const header = (props) => {
    const {title = ""} = props;
    let content = {};
    Object.keys(props).forEach(key => {
        const {iconName = "", onPress} = props[key];
        content = {...content, ...addItem(key, onPress, iconName)}
    });
    return {
        title,
        ...content
    }
}

const addItem = (key, onPress, iconName) => {
    switch (key) {
        case 'drawer': 
            return {
                headerLeft: () => (
                    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                      <Item
                        title="Toggle Drawer"
                        iconName="ios-menu"
                        onPress={onPress}
                      />
                    </HeaderButtons>
                ),
            }
        case 'photo': 
            return {
                headerRight: () => (
                    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                      <Item
                        title="Add photo"
                        iconName="ios-camera"
                        onPress={onPress}
                      />
                    </HeaderButtons>
                ),
            }
        case 'bookmarked': 
            return {
                headerRight: () => (
                    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item
                        title="Bookmark"
                        iconName={iconName}
                        onPress={onPress}
                    />
                    </HeaderButtons>
                ),
            }
        
        default: 
            return;
    }
}