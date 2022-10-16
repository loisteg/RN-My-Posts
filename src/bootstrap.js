import * as Font from "expo-font";

export async function bootstrap(setAppIsReady) {
  try {
    await Font.loadAsync({
      "montserrat-regular": require("../assets/fonts/Montserrat-Regular.ttf"),
      "montserrat-bold": require("../assets/fonts//Montserrat-Bold.ttf"),
    });
  } catch (e) {
    console.warn(e);
  } finally {
    setAppIsReady(true);
  }
}
