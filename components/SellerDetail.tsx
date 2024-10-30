import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface SellerDitailProps {
  profileImage: string;
}

const SellerDetail = ({ profileImage }: SellerDitailProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.bold}>غرفه دار</Text>
      </View>
      <Image
        source={require("@/assets/images/profile1.jpg")}
        style={styles.circlePic}
      />
      <Text style={styles.textHeadingStyle}>فاطمه طالبی</Text>
      <Text style={styles.textGray}>فروشگاه کیف و کفش بیک</Text>
    </View>
  );
};

export default SellerDetail;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "flex-end",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
  },
  bold: {
    fontWeight: "bold",
  },
  textHeadingStyle: {
    color: "#0250a3",
    fontWeight: "bold",
  },
  textGray: {
    color: "rgba(128,128,128,1.00)",
  },
  circlePic: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
