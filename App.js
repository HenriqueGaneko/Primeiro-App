import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Header from "./Src/components/Header";


export default function App() {
  return (
    <View style={{flex: 1, marginVertical: 32, marginHorizontal: 16 }}>
   
     <Header/>
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
            uri: "https://image-service.onefootball.com/transform?w=280&h=210&dpr=2&image=https%3A%2F%2Fwww.milannews24.com%2Fwp-content%2Fuploads%2F2023%2F06%2Fdimensioni-foto-26.jpg"
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
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg4MjgCmsvKeA0W-8sYVLA4hCsEcM1PjZT1Q&usqp=CAU"
          }}
        />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}


