import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    userCard:{
        width,
        height: height * 0.2,
        backgroundColor: 'rgb(21,0,56)',
        borderRadius: 5,
        position: 'relative',
        top: -5,
        paddingHorizontal: 40,
        justifyContent: 'center'
    },
    userImageRound: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 20
    },
    usernameText: {
        fontFamily: 'Quicksand_Bold',
        color: 'white',
        fontSize: 20,
        marginVertical: 5
    },
    balanceText:{
        fontFamily: 'Quicksand_Book',
        color: 'white',
        fontSize: 17,
    },
    userMenuContainer:{
        width,
        paddingVertical: 20,
        borderBottomColor: 'rgb(71,71,71)',
        borderBottomWidth: 1,
    },
    userMenuItem:{
        flexDirection: 'row',
        alignItems: 'center',
        width,
        paddingLeft: width * 0.1,
        paddingVertical: 10    
    },
    textUserRentItem:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 20,
        marginLeft: 10
    },
    title:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 25,
        color: 'rgb(21,0,56)',
        marginBottom: 10,
        marginLeft: width * 0.1,
    },
    iconContainerUserMenu:{
        minWidth: width * 0.1
    }

})

export default styles