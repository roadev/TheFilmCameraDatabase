/**
 * @format
 */
import React from "react";
import { AppRegistry } from "react-native";
import { extendTheme, NativeBaseProvider } from "native-base";
import MyApp from "./App";
import { name as appName } from "./app.json";
// 1. Import the extendTheme function

// 2. Extend the theme to include custom colors, fonts, etc
const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
const theme = extendTheme({ colors: newColorTheme });
// 3. Pass the `theme` prop to the `NativeBaseProvider`
function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <MyApp />
    </NativeBaseProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);
