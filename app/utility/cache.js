import AsyncStorage from "@react-native-async-storage/async-storage";
// import moment from "moment"; 62k (gzipper: 20k) replaced with dayjs
import dayjs from "dayjs";
import logger from "./logger";

const prefix = "cache";
const expiryInMinutes = 5;

const store = async (key, value) => {
  try {
    const item = { value, timeStamp: Date.now() };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (item) => {
  const now = dayjs();
  const storedTime = dayjs(item.timeStamp);
  return now.diff(storedTime, "minute") > expiryInMinutes;
};

const get = async (key) => {
  try {
    const value = AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      //Command Query Seperation (CQS) - violeted for savein cache storage
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }
    return item.value;
  } catch (error) {
    console.log(error);
  }
};

export default {
  store,
  get,
};
