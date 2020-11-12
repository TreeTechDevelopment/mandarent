import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    topBar:{
        width,
        paddingHorizontal: width * 0.05,
        paddingVertical: 10,
        borderBottomColor: 'rgb(100,100,100)',
        borderBottomWidth: 0.5
    },
    topBarTitle:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 25,
        marginVertical: 10
    },
    topBarText:{
        fontFamily: 'Quicksand_Book'
    },
    form:{
        flex: 1,
        width,
        paddingTop: 20
    },
    input: {
        borderColor: 'rgb(100,100,100)',
        borderWidth: 1,
        width: width * 0.9,
        borderRadius: 5,
        fontFamily: 'Quicksand_Book',
        fontSize: 18,
        paddingLeft: 20,
        marginBottom: 20
    },
    inputDescription: {
        borderColor: 'rgb(100,100,100)',
        borderWidth: 1,
        width: width * 0.9,
        borderRadius: 5,
        fontFamily: 'Quicksand_Book',
        fontSize: 18,
        paddingHorizontal: 20,
        marginBottom: 20,
        height: height * 0.2,
        textAlignVertical: 'top'
    },
    pickerContainer:{
        borderColor: 'rgb(35,35,35)',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 20,
        width: width * 0.9
    },
    picker:{
        width: width * 0.85,
        height: height * 0.07,
    },
    titleForm:{
        fontFamily: 'Quicksand_Book',
        fontSize: 23,
        marginBottom: 20
    },
    locationContainer:{
        width: width * 0.9,  
    },
    btn:{
        backgroundColor: 'rgb(217,84,79)',
        height: height * 0.07,
        width: width * 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 40,
        borderRadius: 5
    },
    btnText:{
        color: 'white',
        fontFamily: 'Quicksand_Bold',
        fontSize: 20
    }
})

export default styles