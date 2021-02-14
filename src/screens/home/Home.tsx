import React, {useState} from "react";
import {View} from "react-native";
import {Header} from "../../components/common/header";
import {Post} from "../../components/common/post";

import {styles} from "./styles";

import {posts as data} from "../../data/post";
import Animated, {
	Extrapolate,
	interpolate,
	interpolateColor,
	useAnimatedScrollHandler,
	useAnimatedStyle,
	useSharedValue,
} from "react-native-reanimated";

const HomeScreen: React.FC = () => {
	const [posts, setPosts] = useState(data);
	const offsetY = useSharedValue(0);

	const scrollHandler = useAnimatedScrollHandler((event) => {
		const {
			contentOffset: {y},
		} = event;
		offsetY.value = y;
	});

	const headerStyle = useAnimatedStyle(() => {
		return {
			height: interpolate(
				offsetY.value,
				[100, 200],
				[80, 50],
				Extrapolate.CLAMP
			),
			backgroundColor: interpolateColor(
				offsetY.value,
				[100, 200],
				["#FFFFFF", "#CDCDCD"]
			),
		};
	});

	return (
		<View style={styles.container}>
			<Header headerStyle={headerStyle} />
			<Animated.ScrollView
				showsVerticalScrollIndicator={false}
				onScroll={scrollHandler}
				scrollEventThrottle={16}
			>
				{posts.map((item) => {
					return (
						<Post
							key={item.id.toString()}
							item={item}
							setPosts={setPosts}
						/>
					);
				})}
			</Animated.ScrollView>
		</View>
	);
};

export default HomeScreen;
