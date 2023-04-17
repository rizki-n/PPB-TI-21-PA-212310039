import React, {Component}from "react";
import { View, StatusBar, SafeAreaView, StyleSheet } from "react-native";
import ExpScrollView from "./Friends/widgets/ExpScrollView";
import ExpFlatList from "./Friends/widgets/ExpFlatList";
import SearchBar from "./Friends/widgets/SearchBar";
import { Users } from "./const-data/Dummy";
import { UsersNew } from "./const-data/Dummy";
import ExpSectionList from "./Friends/widgets/ExpSectionList";

class MyFriends extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} style="light" />
          <View style={styles.header}>
              <SearchBar />
          </View>
          <View style={styles.body}>
              {/* ScrollView */}
              {/* <ExpScrollView Users={Users} /> */}

              {/* FlatList */}
              {/* <ExpFlatList Users={Users} /> */}

              {/* SectionList */}
              <ExpSectionList />
          </View>
    </SafeAreaView>
  );
  }
}

export default MyFriends;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: "grey",
  },
  body: {
    flex: 10,
    backgroundColor: "black",
  },
});