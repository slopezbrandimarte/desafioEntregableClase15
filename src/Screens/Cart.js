import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'

import CartItem from '../Components/CartItem'
import {  useSelector } from 'react-redux'
import { usePostOrdersMutation } from '../app/shopServices/shopServices'


const Cart = () => {
    
    const cart = useSelector(state => state.cart.value)
    const [triggerPostOrder] = usePostOrdersMutation()
   
  return (
    <View style={styles.container} >
        
        <FlatList
            data={cart.items}
            keyExtractor={item => item.id}
            renderItem={({item})=> <CartItem item={item}/>}
        />
        <View style={styles.confirmContainer} >
            <Pressable onPress={()=> triggerPostOrder(cart)} >
                <Text style={styles.text}>Confirmar</Text>
            </Pressable>
            <Text style={styles.text}>Total: $ {cart.total}</Text>
        </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginBottom:73
    },
    confirmContainer:{
        backgroundColor:"gray",
        padding:25,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
    },
    text:{
        color:"white",
        fontFamily: "Playfair",
        fontSize:20,
        fontWeight:"bold"
    }
})