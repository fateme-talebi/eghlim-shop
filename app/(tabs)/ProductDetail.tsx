import Button from "@/components/Button";
import { Rating } from "@/components/Rating";
import SellerDetail from "@/components/SellerDetail";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

interface ProductDetailProps {
  id: string;
}
const ProductDetail = ({ id }: ProductDetailProps) => {
  const onOpenChat = (id?: string) => {};

  const onAddToBasket = (id?: string) => {};

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("@/assets/images/bag1.jpg")}
        style={styles.productImage}
      />
      <Text style={styles.title}>
        کیف دخترانه کیف بچگانه، کیف کوله پشتی طرح اسب تک شاخ ، جا دار جنس برزنت
      </Text>
      <View style={styles.ratingPriceContainer}>
        <Text style={styles.price}> 109.000 تومان</Text>
        <View style={styles.rating}>
          <Ionicons name="star" color={"#696969"} size={24} />
          <Text> 5.0 </Text>
          <Text style={styles.colorGray}>(3 نظر)</Text>
        </View>
      </View>
      <SellerDetail profileImage={"@/assets/images/profile1.jpg"} />
      <View style={styles.buttonsContainer}>
        <Button
          bgColor="#fff"
          color="#f58220"
          type={"outline"}
          title="گفت‌وگو"
          onPress={() => onOpenChat(id)}
        />
        <Button
          bgColor="#f58220"
          color="#fff"
          type={"primary"}
          title="افزودن به سبد خرید"
          onPress={() => onAddToBasket(id)}
        />
      </View>
    </ScrollView>
  );
};
export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5F5",
    fontFamily: "Shabnam",
  },
  productImage: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 8,
    textAlign: "right",
  },
  description: {
    fontSize: 16,
    textAlign: "right",
    color: "#555",
    marginVertical: 8,
  },
  ratingPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
    color: "#696969",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },
  rating: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row-reverse",
  },
  colorGray: {
    color: "gray",
  },
});
