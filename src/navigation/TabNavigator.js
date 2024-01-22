import ShopStack from './ShopStack'
import CartStack from "./CartStack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from "react-native"
import { colors } from "../Global/colors.js"
import OrdersStack from "./OrdersStack.js"
import TabIcons from "../Components/TabIcon.js"
import ProfileStack from "./ProfileStack.js"
 

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
    
                <Tab.Navigator
                    screenOptions={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarStyle: style.tabBar
                        
                    }}
                >
                    <Tab.Screen  
                        name="ShopStack" 
                        component={ShopStack}
                        options={{
                            tabBarIcon:({focused})=><TabIcons icon="shop" label="Productos" focused={focused}/>
                        }}
                    />
                    
                    <Tab.Screen 
                        name="CartStack" 
                        component={CartStack}
                        options={{
                            tabBarIcon: ({focused}) => <TabIcons icon="shopping-cart" label="Carrito" focused={focused}/>
                        }}
                    />
                    <Tab.Screen 
                        name="OrdersStack" 
                        component={OrdersStack}
                        options={{
                            tabBarIcon: ({focused}) => <TabIcons icon="list" label="Ordenes" focused={focused} />
                        }}
                    />
                    <Tab.Screen 
                        name="ProfilStack" 
                        component={ProfileStack}
                        options={{
                            tabBarIcon: ({focused}) => <TabIcons icon="user" label="Perfil" focused={focused} />
                        }}
                    />
                    
                </Tab.Navigator>

    )
}

export default TabNavigator

const style = StyleSheet.create({
    tabBar:{
        backgroundColor:colors.green3,
        elevation: 4,
        position: 'absolute',
        bottom:2,
        left:0.2,
        right:0.2,
        borderRadius: 15,
        height:70
    }
})