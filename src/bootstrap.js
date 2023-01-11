import * as Font from "expo-font";
import { DB } from "./db";

export async function bootstrap(setAppIsReady) {
  try {
    await Font.loadAsync({
      "montserrat-regular": require("../assets/fonts/Montserrat-Regular.ttf"),
      "montserrat-bold": require("../assets/fonts//Montserrat-Bold.ttf"),
    });
    await DB.init();
  } catch (e) {
    console.warn(e);
  } finally {
    setAppIsReady(true);
  }
}
