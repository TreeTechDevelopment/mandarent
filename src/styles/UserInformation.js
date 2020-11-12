import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    form:{
        width,
        paddingHorizontal: width * 0.05,
        paddingVertical: 10
    },
    label:{
        fontFamily: 'Quicksand_Book',
        fontSize: 22,
        color: 'rgb(110,110,110)'
    },
    inputContainer:{
        paddingHorizontal: 2,
        borderBottomColor: 'rgb(50,50,50)',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    input:{
        fontFamily: 'Quicksand_Book',
        fontSize: 18,
        color: 'black'
    },
    dateBirthContainer:{
        paddingVertical: 10
    },
    birthText:{
        fontFamily: 'Quicksand_Book',
        fontSize: 20
    },
    btnContainer:{
        width: width * 0.9,
        alignItems: 'flex-end',
        marginTop: 20
    },
    btn:{
        width: width * 0.3,
        height: height * 0.07,
        backgroundColor: 'rgb(65,139,202)',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtn:{
        color: 'white',
        fontFamily: 'Quicksand_Bold',
        fontSize: 20
    }
})

export default styles