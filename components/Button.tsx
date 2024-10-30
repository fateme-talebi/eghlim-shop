import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
  title: string;
  bgColor: string;
  color: string;
  type: string;
  onPress: (param?: any) => void;
}
export default function Button({
  title,
  bgColor,
  color,
  type,
  onPress,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: bgColor,
          borderColor: type === "outline" ? color : "none",
          borderStyle: "solid",
          borderWidth: type === "outline" ? 1 : 0,
        },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: color }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
