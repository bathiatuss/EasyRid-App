import { useEffect } from "react";
import navigation from "../navigation/rootNavigation";

import * as Notifications from "expo-notifications";
import expoPushTokensApi from "../api/expoPushTokens";
import Constants from "expo-constants";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener)
      Notifications.addNotificationReceivedListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }

      const token = (
        await Notifications.getExpoPushTokenAsync({
          projectId: Constants.expoConfig.extra.eas.projectId,
        })
      ).data;
      expoPushTokensApi.register(token);
    } catch (error) {
      console.log("Error getting push token", error);
    }
  };
};
