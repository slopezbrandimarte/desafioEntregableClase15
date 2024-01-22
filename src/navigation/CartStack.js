import React from "react"
import Header from "../Components/Header"
import Cart from "../Screens/Cart"
import { createNativeStackNavigator } from '@react-navigation/native-stack'



const Stack = createNativeStackNavigator()

const CartStack = ()=> {
    return (
        <Stack.Navigator
                initialRouteName='Cart'
                screenOptions={
                    ({route}) => {
                        return {
                            header : ()=> 
                                <Header title="Carrito"/>
                        }
                    }
                }   
            >
                <Stack.Screen name="Cart" component={Cart}/>
                
        </Stack.Navigator>
    )
}

export default CartStack