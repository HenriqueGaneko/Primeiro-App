import{View, Image, TouchableOpacity} from "react-native";
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import Logo from "../../assets/logo.png";


export default function Header() {
    return (
        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
        <Image style={{ height: 60, width: 200 }} source={Logo} />
        <View style={{ flexDirection: "row", gap: 15 , marginTop:20}}>
          <TouchableOpacity>
            <Feather name="heart" size={24} color="black" /></TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="facebook-messenger" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    )
}