import {  View, StyleSheet } from "react-native";
import imagem1 from "../teste/Src/assets/imagem1.jpg";
import InfoProfile from "./Src/components/infoProfile";

export default function App() {
  return (
    <View style={styles.container}>
      <InfoProfile
      image={imagem1}
      publi={250}
      followers={1000}
      following={600}
      />
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


