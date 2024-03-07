import {  View, StyleSheet , Text } from "react-native";
import imagem1 from "../assets/imagem1.jpg";
import InfoProfile from "../components/infoProfile";
import MyPosts from "../components/MyPosts";

export default function Profile() {
  return (
    <View style={styles.container}>
      <InfoProfile
      image={imagem1}
      publi={3.281}
      followers="75.7 M"
      following={555}
      description={"Ronaldo de Assis Moreira"}
      />
      <MyPosts/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 35,
    marginHorizontal: 16,
  },
});


