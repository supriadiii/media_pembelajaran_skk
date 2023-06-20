import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';

import Algoritma from './src/Algoritma';
import Fungsi from './src/Fungsi';
import Home from './src/Home';
import Notasi from './src/Notasi';
import Pengertian from './src/Pengertian';
import Sejarah from './src/Sejarah';
import Soal from './src/Soal';
import ModalMateri from './src/components/Modal';

const Stack = createNativeStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    Poppins_Black: require('./assets/fonts/Poppins-Black.ttf'),
    Poppins_BlackItalic: require('./assets/fonts/Poppins-BlackItalic.ttf'),
    Poppins_Bold: require('./assets/fonts/Poppins-Bold.ttf'),
    Poppins_BoldItalic: require('./assets/fonts/Poppins-BoldItalic.ttf'),
    Poppins_ExtraLight: require('./assets/fonts/Poppins-ExtraLight.ttf'),
    Poppins_ExtraLightItalic: require('./assets/fonts/Poppins-ExtraLightItalic.ttf'),
    Poppins_Italic: require('./assets/fonts/Poppins-Italic.ttf'),
    Poppins_Light: require('./assets/fonts/Poppins-Light.ttf'),
    Poppins_LightItalic: require('./assets/fonts/Poppins-LightItalic.ttf'),
    Poppins_Medium: require('./assets/fonts/Poppins-Medium.ttf'),
    Poppins_MediumItalic: require('./assets/fonts/Poppins-MediumItalic.ttf'),
    Poppins_Regular: require('./assets/fonts/Poppins-Regular.ttf'),
    Poppins_SemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    Poppins_SemiBoldItalic: require('./assets/fonts/Poppins-SemiBoldItalic.ttf'),
    Poppins_Thin: require('./assets/fonts/Poppins-Thin.ttf'),
    Poppins_ThinItalic: require('./assets/fonts/Poppins-Black.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await fetchFonts();
      setFontLoaded(true);
    }
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TabNavigator" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Pengertian" component={Pengertian} />
          <Stack.Screen name="Sejarah" component={Sejarah} />
          <Stack.Screen name="Fungsi" component={Fungsi} />
          <Stack.Screen name="Notasi" component={Notasi} />
          <Stack.Screen name="Algoritma" component={Algoritma} />
          <Stack.Screen name="Soal" component={Soal} />
          <Stack.Screen name="ModalMateri" component={ModalMateri} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
