import AsyncStorage from '@react-native-async-storage/async-storage';

const REDUX_PERSIST = {
  active: false,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    blacklist: [],
    timeout: null,
  },
};

export default REDUX_PERSIST;
