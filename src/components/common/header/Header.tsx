import React from "react";
import {Text, View} from "react-native";

import {styles} from "./styles";

const Header: React.FC = () => {
  return (
    <View>
      <Text style={styles.title}>Instagram</Text>
    </View>
  );
};

export default Header;
