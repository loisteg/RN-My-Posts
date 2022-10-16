import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../theme";

export const AppHeaderIcon = (props) => (
  <HeaderButton
    {...props}
    iconSize={22}
    IconComponent={Ionicons}
    color={Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR}
    style={{ height: "100%", ...props.style }}
  />
);
