import { Pressable, StyleSheet, Text } from "react-native"
import { colors } from "../Global/colors"



const SubmitButton = ({title, onPress}) => {

    return(
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

export default SubmitButton

const styles = StyleSheet.create({
    button:{
        width:"60%",
        backgroundColor:colors.green3,
        padding:10,
        alingItems:"center",
        borderRadius:10,
    },
    text:{
        textAlign: "center",
        color: "white",
        fontSize: 18
    }
})