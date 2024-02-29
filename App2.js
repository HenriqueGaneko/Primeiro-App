import {  View, StyleSheet } from "react-native";
import Header from "./Src/components/Header";
import Stories from "./Src/components/Stories";


export default function App() {
  return (
    <View style={styles.container}>
     <Header/>
      <Stories/>
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
  Image: {
    flexDirection: "row",
    gap: 16,
  }
});


