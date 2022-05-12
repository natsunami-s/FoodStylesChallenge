import { Dimensions } from 'react-native';

export const { height, width } = Dimensions.get('screen');

export const { height: windowHeight } = Dimensions.get('window');

export const scale = (designWidth = 0): number => designWidth * (width / 375);
