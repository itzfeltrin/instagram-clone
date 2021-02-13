import React from "react";
import {Text, View, ScrollView} from "react-native";
import {Header} from "../../components/common/header";

const HomeScreen: React.FC = () => {
  return (
    <ScrollView>
      <Header />
      <Text>Home Screen</Text>
    </ScrollView>
  );
};

export default HomeScreen;
