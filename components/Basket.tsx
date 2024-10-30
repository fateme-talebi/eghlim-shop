import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
interface BasketProps {
  id: string;
  route: any;
}
const items = [
  { id: 1, name: "Item 1", price: "10,000 تومان" },
  { id: 2, name: "Item 2", price: "20,000 تومان" },
];

export default function Basket({ id, route }: BasketProps) {
  // const { items } = route.params; // Get items from navigation
  console.log(id, "id");

  return (
    <View style={styles.container}>
      {items.length > 0 ? (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
          )}
        />
      ) : (
        <Text>Your Basket is Empty</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  itemContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 16,
    color: "#555",
  },
});
