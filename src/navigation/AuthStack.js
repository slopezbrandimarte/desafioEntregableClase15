import Header from "../Components/Header"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from "../Screens/Login"
import Signup from "../Screens/Signup"



const Stack = createNativeStackNavigator()

const AuthStack = ()=> {
    return (
        <Stack.Navigator
                initialRouteName='Signup'
                screenOptions={
                    ({route}) => {
                        return {
                            header : ()=> 
                                <Header title="Bienvenido"/>
                        }
                    }
                }   
            >
                <Stack.Screen name="Signup" component={Signup}/>
                <Stack.Screen name="Login" component={Login}/>
                
        </Stack.Navigator>
    )
}

export default AuthStack