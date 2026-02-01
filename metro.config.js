const { getDefaultConfig } = require("expo/metro-config");
import { *asImagePicker } from 'expo-image-picker';
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname)
 
module.exports = withNativeWind(config, { input: './global.css/*asImagePicker' })