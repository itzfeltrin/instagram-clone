import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {TabRoutes} from "../../data/navigation";
// screen
import {HomeScreen} from "../../screens/home";

const Tabs = createBottomTabNavigator<TabRoutes>();

const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Home" component={HomeScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
