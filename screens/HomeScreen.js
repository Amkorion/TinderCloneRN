import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View className="flex-1 align-middle justify-center">
      <Text className="text-center">Home screen</Text>
      <Button
        onPress={() => navigation.navigate("Chat")}
        title="go to chat screen"
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
