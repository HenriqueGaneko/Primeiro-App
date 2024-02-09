import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Logo from "../teste/assets/logo.png";
import { Feather, FontAwesome5 } from '@expo/vector-icons';


export default function App() {
  return (
    <View style={{flex: 1, marginVertical: 32, marginHorizontal: 16 }}>
      <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
        <Image style={{ height: 60, width: 200 }} source={Logo} />
        <View style={{ flexDirection: "row", gap: 15 }}>
          <Feather name="heart" size={24} color="black" />
          <FontAwesome5 name="facebook-messenger" size={24} color="black" />
        </View>
      </View>

      <ScrollView horizontal contentContainerStyle={{ gap: 8 }}
        style={{ flexDirection: "row"}}
       showsHorizontalScrollIndicator={false}
      >
        
        <TouchableOpacity>
          <Image
            style={{ height: 100, width: 100, borderRadius: 50 }}
            source={{
              uri: "https://jpimg.com.br/uploads/2019/06/D9SEi-1W4AAA9GE-1.jpg"
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={{ height: 100, width: 100, borderRadius: 50 }}
          source={{
            uri: "https://img.r7.com/images/ronaldinho-gaucho-24122018132413791?dimensions=660x660"
          }}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={{ height: 100, width: 100, borderRadius: 50 }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZQQrfhsc02pKWmkCKGbtskEQ2VHRicupQ2g&usqp=CAU"
          }}
        />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
          style={{ height: 100, width: 100, borderRadius: 50 }}
          source={{
            uri: "https://pbs.twimg.com/media/FOZlD2cXIAU09dk.jpg:large"
          }}
        />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}


