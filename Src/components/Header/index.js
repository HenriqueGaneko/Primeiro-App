import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import Logo from "../../assets/logo.png";


export default function Header() {
  return (
    <View styles={styles.header}>
      <Image style={{ height: 60, width: 200 }} source={Logo} />
      <View styles={styles.icons}>
        <TouchableOpacity>
          <Feather name="heart" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5 name="facebook-messenger" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icons: {
    flexDirection: "row",
    padding: 10,
    gap: 5,
  },
});