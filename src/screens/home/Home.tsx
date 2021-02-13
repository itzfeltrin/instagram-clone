import React, {useState} from "react";
import {Text, View, ScrollView} from "react-native";
import {FlatList} from "react-native-gesture-handler";
import {Header} from "../../components/common/header";
import {Post} from "../../components/common/post";

import {styles} from "./styles";

import {posts as data} from "../../data/post";

const HomeScreen: React.FC = () => {
  const [posts, setPosts] = useState(data);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={posts}
        renderItem={(props) => <Post {...props} setPosts={setPosts} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default HomeScreen;
