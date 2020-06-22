import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import Colors from "../constants/colors"

const BottomBar = (props) => {
  return (
    <View style={styles.main}>
      <View style={styles.dividerH} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={{ flex: 1 }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Products</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.dividerV} />

        <TouchableOpacity style={{ flex: 1 }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              {"Cart(" + props.productCount + ")"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: 50,
  },
  dividerH: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.divider,
  },
  dividerV: {
    width: 1,
    height: "100%",
    backgroundColor: Colors.divider,
  },
  buttonContainer: {
    flexDirection: "row",
    flex: 1,
    height: "100%",
  },
  button: {
    backgroundColor: Colors.accent,
    color: "white",
    width: "100%",
    fontSize: 18,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 14,
    color: "white",
  },
});

export default BottomBar;
