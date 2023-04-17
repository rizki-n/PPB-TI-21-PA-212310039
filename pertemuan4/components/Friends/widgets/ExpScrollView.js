import { ScrollView } from "react-native";
import React from "react";
import { MyUsers } from "../../const-data/User";
import UserItems from "./UserItems";

const ExpScrollView = ({ MyUsers }) => {
  return (
    <ScrollView>
      {MyUsers.map((v, index) => (
        <UserItems item={v} key={index} />
      ))}
    </ScrollView>
  );
};

export default ExpScrollView;