import {  View, StyleSheet, DrawerLayoutAndroidComponent,ScrollView } from "react-native";
import Header from "../components/Header";
import Stories from "../components/Stories";
import Post from "../components/Posts";
import imagem3 from "../assets/imagem3.jpg";
import imagem4 from "../assets/imagem4.jpg";


export default function Home() {
  return (
    <ScrollView style={styles.container}>
     <Header/>
      <Stories/>
      <Post
    profileImage={imagem3}
    postImage={imagem4}
    profileName="Ronaldo"
    description="lorem loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    />
      <Post
    profileImage={imagem3}
    postImage={imagem4}
    profileName="Ronaldo"
    description="lorem loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    />
      <Post
    profileImage={imagem3}
    postImage={imagem4}
    profileName="Ronaldo"
    description="lorem loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem"
    />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 35,
    marginHorizontal: 16,
  },
  Image: {
    flexDirection: "row",
    gap: 16,
  }
});


