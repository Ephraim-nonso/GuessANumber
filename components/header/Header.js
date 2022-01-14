import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Color from "../../constants/colors";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Color.primary,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 90,
    paddingTop: 36,
  },

  headerTitle: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "boldFont",
  },
});
