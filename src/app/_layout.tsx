import { Slot } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import * as SplashScreen from 'expo-splash-screen';

//SplashScreen seria algo como tela inicial ou  a primeira tela da sua aplicação
SplashScreen.preventAutoHideAsync();

const Layout = () => {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  if(fontsLoaded) {
    SplashScreen.hideAsync()
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
     {fontsLoaded && <Slot />}
    </GestureHandlerRootView>
  );
};

export default Layout;
