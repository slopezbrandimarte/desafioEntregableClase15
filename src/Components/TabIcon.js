import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from "@expo/vector-icons"




const TabIcons = ({icon,label, focused}) => {
    return (
        <View style={styles.container} >
            <Entypo name={icon} size={30} color={focused ? "white" : "lightgray"}/>
            <Text style={{...styles.text,...{color:focused ? "white" : "lightgray"}}}>{label}</Text>
        </View>
    )
}

export default TabIcons

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        gap:3
    },
    text:{
        color: 'white',
        textAlign:'center'
    }
})