import AsyncStorage from '@react-native-async-storage/async-storage';

export const setData = async (key: string, value: any) => {
    try {
    if (typeof value === 'object') {
        value = JSON.stringify(value);
    }
    const data = AsyncStorage.setItem(key, value);
    return data;
    } catch (e) {
    // saving error
        return e;
    }
}

export const getData = async (key: string) => {
    try {
        console.log("andarr")
    return await AsyncStorage.getItem(key);
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

