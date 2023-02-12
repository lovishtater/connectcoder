import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: any) => {
    try {
    const data = AsyncStorage.setItem(key, value);
    return data;
    } catch (e) {
    // saving error
        return e;
    }
}

export const getData = async (key: string) => {
    try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? jsonValue : null;
    } catch(e) {
    // error reading value
        return e;
    }
}

export const removeData = async (key: string) => {
    try {
    const data = await AsyncStorage.removeItem(key);
    return data;
    } catch(e) {
    // error reading value
        return e;
    }
}

