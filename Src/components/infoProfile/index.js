import { StyleSheet, View ,  Text , Image } from "react-native"

export default function IntoProfile ({ 
    image,
    publi, 
    followers, 
    following,
    description
}) {
    return(
        <View>
            <View style={styles.container}>
                <Image style={styles.imageProfile} source={image}/>
                <View style={styles.info}>
                    <View style={styles.count}>
                        <Text style={styles.bold}>{publi}</Text>
                        <Text>publicações</Text>
                    </View>
                    <View style={styles.count}>
                        <Text style={styles.bold}>{followers}</Text>
                        <Text>Seguidores</Text>
                    </View>
                    <View style={styles.count}>
                        <Text style={styles.bold}>{following}</Text>
                        <Text>Seguindo</Text>
                    </View>
                </View>
            </View>
            <View style={styles.description}>
                <Text>{description}</Text>
            </View>
        </View>
        
        
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent: "space-between",
    },
    info:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        flex: 1,
        gap: 16,
    },
    count:{
        alignItems:"center",
        justifyContent:"center",
    },
    bold:{
        fontWeight:"700",
    },
    imageProfile:{
        width: 100,
        height:100,
        borderRadius:50,
    },
    description: {
        marginVertical: 15,
        fontSize:"1000",
    },
})