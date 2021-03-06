import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import CarsList from "./components/CarsList/index";
import Header from "./components/Header/index";

export default function App() {
  return (
    <View style={styles.Container}>
      <Header></Header>
      <CarsList></CarsList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
