import React from "react";
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box } from "native-base";

export default function MyApp() {
  // 2. Use at the root of your app
  return (
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Text>Open up App.js to start working on your app!</Text>
      </Box>
  );
}
