import { Image, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";

export default function CardNoticiaImagem({ imagePath, textContent, height, width, onPress }) {


    const styles = StyleSheet.create({
        container: {
            paddingLeft:10,
            flexDirection: "row",
            backgroundColor: "#3C8000",
            justifyContent: "space-between",
            height: height,
            width: width,
            borderRadius: 5,
            alignItems:"center"
        },
        textStyle: {
            overflow:"hidden",
            maxWidth:"60%",
            width:"60%",
            fontSize:26,
            color:"black",
            fontFamily: "Imbue2"
        }
    });

    return <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <Text numberOfLines={4} style={styles.textStyle}>{textContent}</Text>
            <Image style={{ height: "100%" }} source={imagePath}></Image>
        </View>
    </TouchableOpacity>



}

