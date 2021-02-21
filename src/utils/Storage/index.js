import AsyncStorage from '@react-native-async-storage/async-storage';
import { ShowError } from '../Message';


export const storeData = async (storageKey,value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(storageKey, jsonValue)
    } catch (e) {
      // saving error
      ShowError('Gagal Menyimpan di Local Storage')
    }
  }

  
export const getData = async (storageKey) => {
    try {
      const jsonValue = await AsyncStorage.getItem(storageKey)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
      ShowError('Gagal Mengambil data dari Local Storage')
    }
  }
  