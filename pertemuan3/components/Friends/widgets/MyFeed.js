import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const Feed = () => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Image
          source={require("../../../assets/woman.png")}
          style={styles.avatar}
        />
        <Text style={styles.username}>Rani</Text>
      </View>

      <View>
        <Image
          source={{uri: "https://i.redd.it/sioh1753aqk21.jpg"}}
          style={styles.feeds}
        />
      </View>

      <View style={styles.icon}>
        <Image source={require("../../../assets/heart.png")} />
        <Image source={require("../../../assets/airplane.png")} />
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <Image
          source={require("../../../assets/man.png")}
          style={styles.avatar}
        />
        <Text style={styles.username}>Wisnu</Text>
      </View>

      <View>
        <Image
          source={{uri: "https://i.imgflip.com/4vuox5.jpg"}}
          style={styles.feeds}
        />
      </View>

      <View style={styles.icon}>
        <Image source={require("../../../assets/heart.png")} />
        <Image source={require("../../../assets/airplane.png")} />
      </View>
      <View style={styles.icon}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderColor: "black",
    borderRadius: 100,
    borderWidth: 2
  },
  username: {
    color: "black",
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  feeds: {
    height: 500,
    width: 450,
    alignContent: "center",
  },
  icon: {
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: "row",
  },
});

export default Feed;