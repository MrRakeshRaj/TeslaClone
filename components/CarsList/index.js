import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import styles from "./styles";
import cars from "./cars";
import CarItem from "./../CarItem/index";

const CarsList = (props) => {
  console.log(cars);
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item}></CarItem>}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        decelerationRate={"normal"}
        snapToInterval={Dimensions.get("window").height}
      ></FlatList>
    </View>
  );
};

export default CarsList;
