import React, {useCallback} from "react";
import {Image, ScrollView, Text, View} from "react-native";
import {
	State,
	TapGestureHandler,
	TapGestureHandlerStateChangeEvent,
} from "react-native-gesture-handler";

import {PostProps} from "../../../data/post";

import {SCREEN_WIDHT, styles} from "./styles";

interface CustomProps {
	item: PostProps;
	[key: string]: any;
}

const Post: React.FC<CustomProps> = (props) => {
	const {
		item: {id, author, img, text, likes, comments},
		setPosts,
	} = props;

	const handleLike = useCallback(
		(event: TapGestureHandlerStateChangeEvent) => {
			const {
				nativeEvent: {state},
			} = event;
			if (state === State.ACTIVE) {
				setPosts((prev: PostProps[]) =>
					[...prev].map((item) => {
						let obj = {...item};
						if (obj.id === id && !obj.liked) {
							obj.liked = true;
							obj.likes += 1;
						}
						return obj;
					})
				);
			}
		},
		[State]
	);

	return (
		<View style={styles.container}>
			<View style={styles.authorContainer}>
				<Image source={img[0]} style={styles.avatar} />
				<Text style={styles.authorName}>{author}</Text>
			</View>
			<TapGestureHandler
				numberOfTaps={2}
				onHandlerStateChange={handleLike}
			>
				<ScrollView
					horizontal
					snapToInterval={SCREEN_WIDHT}
					decelerationRate="normal"
					showsHorizontalScrollIndicator={false}
					disableIntervalMomentum={true}
				>
					{img.map((item, index) => {
						return (
							<Image
								key={`post-${id}-img-${index}`}
								source={item}
								style={styles.image}
							/>
						);
					})}
				</ScrollView>
			</TapGestureHandler>
			<View style={styles.infoContainer}>
				<Text style={styles.text} numberOfLines={2}>
					{text}
				</Text>
				<Text style={styles.likes}>
					{likes === 0
						? "be the first to like this post"
						: `${likes} ${likes === 1 ? "like" : "likes"}`}
				</Text>
			</View>
			{/* <Text>{comments} comments</Text> */}
		</View>
	);
};

export default Post;
