import { StatusBar } from 'react-native'
import { fonts } from './src/Global/fonts'
import { useFonts } from "expo-font"
import { colors } from './src/Global/colors'
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import MainNavigator from './src/navigation/MainNavigator'



const  App = () => {
 
  
  const [fontLoaded] = useFonts(fonts)

  if(!fontLoaded) return null

  
  return (
    <>
      <StatusBar backgroundColor={colors.green1}/>
      <Provider store={store}>
        <MainNavigator/>
      </Provider>
        

        
    </>
  )
}

export default App


