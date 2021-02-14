import React, {useCallback, useState} from "react";
import {StatusBar} from "react-native";
import {Navigator} from "./src/components/navigator";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const App: React.FC = () => {
	const [loaded, setLoaded] = useState(false);

	const fetchFonts = useCallback(() => {
		return Font.loadAsync({
			light: require("./src/assets/font/Montserrat-Light.ttf"),
			regular: require("./src/assets/font/Montserrat-Regular.ttf"),
			medium: require("./src/assets/font/Montserrat-Medium.ttf"),
			semiBold: require("./src/assets/font/Montserrat-SemiBold.ttf"),
			bold: require("./src/assets/font/Montserrat-Bold.ttf"),
		});
	}, [Font]);

	if (!loaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setLoaded(true)}
				onError={() => console.log("something went wrong")}
			/>
		);
	}

	return (
		<>
			<StatusBar barStyle="default" />
			<Navigator />
		</>
	);
};

export default App;
