import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors"

const Header = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Papa Test</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    backgroundColor: Colors.primary,
    height: 60,
    paddingTop: 16,
    alignItems: 'center',
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
});

export default Header;
