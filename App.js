import { NavigationContainer, useNavigation } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import { Button, Text, View } from "react-native";
import { AuthProvider } from "./hooks/useAuth";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
