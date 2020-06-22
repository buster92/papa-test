import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ImageLoader from "react-native-image-progress";
import PapaPriceFormat from "./PapaPriceFormat";
import Colors from "../constants/colors"

const ProductItem = (props) => {
  return (
    <View style={styles.main}>
      <ImageLoader
        component={ImageLoader}
        resizeMode="contain"
        indicator={true}
        indicatorProps={{
          size: 25,
          borderWidth: 0,
          color: "#062baa",
          unfilledColor: "#0e6605",
        }}
        // disable loading indicator
        //indicatorColor="white" // react native colors or color codes like #919191
        // indicatorSize="small" // (small | large) or integer
        source={{
          uri: props.url,
        }}
        style={[styles.image]}
      />
      <View style={{ flex: 1, padding: 2 }}>
        <Text style={styles.title} numberOfLines={1}>
          {props.title}
        </Text>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ flex: 1 }}>{props.type}</Text>
          <Text>
          <PapaPriceFormat value={props.price} />
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.addCartButton}
        onPress={props.onPress.bind(this, props.id)}
      >
        <Text style={styles.addCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    marginBottom: 6,
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    flex: 1,
  },
  addCartButton: {
    marginStart: 4,
    backgroundColor: Colors.accent,
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  addCartButtonText: {
    color: "white",
    fontSize: 10,
    textAlign: "center",
  },
});

export default ProductItem;
