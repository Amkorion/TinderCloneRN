import * as Google from "expo-google-app-auth";
import React from "react";
import { createContext } from "react";
import { useContext } from "react";
import { ANDROID_CLIENT_ID, IOS_CLIENT_ID } from "@env";

const AuthContect = createContext({});

const config = {
  androidClientId: ANDROID_CLIENT_ID,
  iosClientId: IOS_CLIENT_ID,
  scopes: ["profile", "email"],
  permissions: ["public_profile", "email", "gender", "location"],
};

// export const AuthProvider = ({ children }) => {
//   const signInWithGoogle = async () => {
//     await Google.logInAsync(config).then(async (logInResult) => {
//       if (logInResult.type === "success") {
//         console.log("");
//       }
//     });
//   };

export const AuthProvider = ({ children }) => {
  const signInWithGoogle = async () => {
    await Google.logInAsync(config).then(async (logInResult) => {
      if (logInResult.type === "success") {
        console.log("");
      }
    });
  };

  return (
    <AuthContect.Provider value={{ user: null, signInWithGoogle }}>
      {children}
    </AuthContect.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContect);
}
