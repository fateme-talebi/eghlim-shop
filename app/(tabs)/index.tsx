import React from "react";
import Basket from "@/components/Basket";
import HeaderIcons from "@/components/HeaderIcons";
import Search from "@/components/Search";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import ProductDetail from "./ProductDetail";

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="ProductDetail">
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          initialParams={{ id: "1" }}
          options={({ navigation }) => ({
            headerLeft: () => <HeaderIcons navigation={navigation} />,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons
                  name="arrow-forward"
                  size={24}
                  color="black"
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
            ),
            title: "",
          })}
        />
        <Stack.Screen
          name="Basket"
          component={Basket}
          options={{ title: "Basket" }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ title: "Search" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
