import React from "react";
import { SectionList, Text } from "react-native";
import { MyUsers } from "../../const-data/Dummy";
import UserItems from "./UserItems";

const ExpSectionList = () => {
  const data = [
    { title: "Suggested", data: MyUsers },
    { title: "Followers", data: MyUsers },
  ];
  return (
    <SectionList
      sections={data}
      renderItem={({ item }) => <UserItems item={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={{ color: "white", fontSize: 16 }}>{title}</Text>
      )}
    />
  );
};

export default ExpSectionList;