import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "./components/context/context";
import MainAuth from "./components/screens/auth/MainAuth";
import MainScreen from "./components/screens/main/MainScreen";
import { gStyle } from "./components/styles";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {isAuth ? (
        <MainScreen />
      ) : (
        <View style={gStyle.main}>
          <MainAuth />
        </View>
      )}
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
