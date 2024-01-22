import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { colors } from '../Global/colors'

const CartItem = ({item}) => {
  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.text1}>{item.title}</Text> 
            <Text style={styles.text2}>{item.brand}</Text>
            <Text style={styles.text3}>Cantidad: {item.quantity}    Precio: $ {item.price}</Text>
            
        </View>
        <Entypo name='trash' size={25} color="lightgray" />
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.green3,
        margin:10,
        padding:10,
        height:128,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:10,
        borderWidth:2
    },
    textContainer:{
        gap: 3,
        padding:5,
        marginBottom:6
    },
    text1:{
        fontSize:19,
        color:colors.lightGray,
        fontFamily:"Josefin"
    },
    text2:{
        fontSize:17,
        color:colors.lightGray,
        fontFamily:"Josefin"
    },
    text3:{
        fontSize:19,
        color:colors.lightGray,
        fontFamily:"Josefin"
    }
    
    
})