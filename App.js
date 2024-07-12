import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  return (
    /*
    FIXME: FIXED upgrade the expo to @latest
    The following packages should be updated for best compatibility with the installed expo version:
    expo@51.0.16 - expected version: ~51.0.17
    Your project may not work correctly until you install the expected versions of the packages.
    */

    //GestureHandlerRootView removed from ListItem.js.
    //Swipeable component was wrapped inside.
    <>
      <OfflineNotice />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer theme={navigationTheme}>
          <AppNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
}
