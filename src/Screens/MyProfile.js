import { StyleSheet, View, Image} from 'react-native'
import AddButton from '../Components/AddButton'
import { useGetProfilImageQuery } from '../app/shopServices/shopServices'
import { useSelector } from 'react-redux'




const MyProfile = ({navigation}) => {
    const localId = useSelector(state => state.auth.value.localId)
    const {data} = useGetProfilImageQuery(localId)

    

  return (
    <View style={styles.container} >
        <Image
            source={data ? {uri:data.image} : require("../../assets/user.jpg")}
            style={styles.image}
            resizeMode='cover'
            
        />
        <AddButton title={"Agregar imagen de pefil"} onPress={()=> navigation.navigate("ImageSelector")}/>
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
        
    },
    image:{
        width:250,
        height: 250,
        borderRadius:60
    }

})