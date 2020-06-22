import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import ProductItem from "./components/ProductItem";
import Header from "./components/Header";
import BottomBar from "./components/BottomBar";
import { apiConfig } from "./configs/config";
import Axios from "axios";

export default function App() {
  const [isShowingCart, setIsShowingCart] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  const addProductToCart = async (product) => {
    setCartProducts((currentItems) => [
      ...currentItems,
      product,
    ]);
  };

  const getAllProducts = async () => {
    Axios.get(apiConfig.baseUrl + "amiibo")
      .then(async (response) => {
        const result = [];
        response.data.amiibo.forEach((item) => {
          // setProducts(products.concat({ id: Math.random().toString(), value: item.name }));
          result.push({
            id: Math.random().toString(),
            value: item.name,
            url: item.image,
            price: 3.65,
            type: item.type,
          });
        });
        setProducts(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={{ height: "100%" }}>
      <Header />

      <View style={styles.screen}>
        <Button title="Load Products" onPress={getAllProducts} />
        
        <FlatList
          style={{ flex: 1 }}
          keyExtractor={(item, index) => item.id}
          data={products}
          renderItem={(itemData) => (
            <ProductItem
              id={itemData.item.id}
              title={itemData.item.value}
              price={itemData.item.price}
              type={itemData.item.type}
              url={itemData.item.url}
              onPress={addProductToCart}
            />
          )}
        />
      </View>

      <BottomBar productCount={cartProducts.length} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 4,
    flex: 1,
  },
});
