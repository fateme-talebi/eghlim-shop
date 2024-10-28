import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
interface HeaderIconsProps {
  navigation: any;
}
export default function HeaderIcons({ navigation }: HeaderIconsProps) {
  return (
    <View style={{ flexDirection: "row", marginLeft: 10 }}>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <Ionicons name="search-outline" size={24} style={{ marginRight: 20 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Basket")}>
        <Ionicons name="cart-outline" size={24} />
      </TouchableOpacity>
    </View>
  );
}
