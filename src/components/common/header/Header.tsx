import React from "react";
import {Text, View} from "react-native";

import {styles} from "./styles";

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instagram</Text>
    </View>
  );
};

export default Header;
