import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center'
    },
    topBar:{
        width,
        borderBottomColor: 'rgb(150,150,150)',
        borderBottomWidth: 1,
        height: height * 0.1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: width * 0.05
    },
    textTopBar:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 30,
        color: 'rgb(68,82,85)',
        marginLeft: 20
    },
    favoritesContainer:{
        width,
        flex: 1,
    }
})

export default styles