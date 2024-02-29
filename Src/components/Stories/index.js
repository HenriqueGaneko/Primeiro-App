import { StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import imagem1 from "../../../Src/assets/imagem1.jpg";
import imagem2 from "../../../Src/assets/imagem2.jpg";
import Story from "../Story/index.js";


export default function Stories(){
  return(
<ScrollView 
       contentContainerStyle={styles.container}
       horizontal
       showsHorizontalScrollIndicator={false}
>
      <Story image={imagem1}/>
      <Story image={imagem2}/>
      <Story image={imagem1}/>
      <Story image={imagem2}/>
      <Story image={imagem1}/>
      <Story image={imagem2}/>
        
</ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        gap: 8,
        height:100,
    },
});