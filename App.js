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
  const [cartProductCount, setCartProductCount] = useState(0);

  const getCartCount = () => {
    var total = 0;
    cartProducts.forEach((product) => {
      total = total + product.count;
    });
    return total;
  };

  const addProductToCart = async (productId) => {
    const product = products.find((p) => {
      if (p.id === productId) {
        return true;
      }
      return false;
    });

    
    const found = cartProducts.find((p) => {
      if (p.id === productId) {
        p.count = p.count + 1;
        return true;
      }
      return false;
    });

    if (!found) {
      setCartProducts((currentItems) => [...currentItems, product]);
    }
    setCartProductCount(getCartCount());
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
            count: 1,
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

      <BottomBar productCount={getCartCount()} selectedIndex={0} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 4,
    flex: 1,
  },
});
