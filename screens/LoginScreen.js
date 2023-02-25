import { View, Text, Button } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <View>
      <Text>Login to the App</Text>
      <Button title="Зайти" onPress={signInWithGoogle} />
    </View>
  );
};

export default LoginScreen;
