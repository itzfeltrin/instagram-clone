import React from "react";
import {Text} from "react-native";
import Animated from "react-native-reanimated";

import {styles} from "./styles";
interface HeaderProps {
	headerStyle: Animated.AnimatedStyleProp<{}>;
}

const Header: React.FC<HeaderProps> = (props) => {
	const {headerStyle} = props;

	return (
		<Animated.View style={[styles.container, headerStyle]}>
			<Text style={styles.title}>Instagram</Text>
		</Animated.View>
	);
};

export default Header;
