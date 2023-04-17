import React from "react";
import { FlatList } from "react-native";
import { MyUsers } from "../../const-data/Dummy";
import UserItems from "./UserItems";

const ExpFlatList = () => {
  return (
    <FlatList
      data={MyUsers}
      renderItem={({ item }) => <UserItems item={item} />}
    />
  );
};

export default ExpFlatList;