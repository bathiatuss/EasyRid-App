import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { useEffect, useState } from "react";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import { jwtDecode } from "jwt-decode";

export default function App() {
  const [user, setUser] = useState();

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;
    setUser(jwtDecode(token));
  };

  useEffect(() => {
    restoreToken();
  }, []);

  return (
    /*
    FIXME: FIXED upgrade the expo to @latest("^51.0.16")
    The following packages should be updated for best compatibility with the installed expo version:
    expo@51.0.16 - expected version: ~51.0.17
    Your project may not work correctly until you install the expected versions of the packages.
    */

    //GestureHandlerRootView removed from ListItem.js.
    //Swipeable component was wrapped inside.
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </GestureHandlerRootView>
    </AuthContext.Provider>
  );
}
