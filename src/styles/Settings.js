import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    navbarSettingsContainer:{
        width,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        backgroundColor: 'white',
        position: 'relative',
        top: -5,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    navbarSettingsTitle:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 30,
        marginTop: 20
    },
    optionSetting:{
        width: width * 0.9,
        height: height * 0.11,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        justifyContent: 'center',
        marginTop: 20
    },
    optionSettingwCheckbox:{
        width: width * 0.9,
        height: height * 0.11,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    optionSettingText:{
        fontFamily: 'Quicksand_Book',
        fontSize: 28
    },
    textVersion:{
        fontFamily: 'Quicksand_Book',
        marginTop: height * 0.05
    },
    input:{
        width: width * 0.9,
        height: height * 0.08,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        fontFamily: 'Quicksand_Book',
        fontSize: 20
    },
    inputContainer:{
        marginTop: 30
    },
    btnChangePassword:{
        width: width * 0.4,
        height: height * 0.1,
        borderRadius: 5,
        backgroundColor: 'rgb(22,157,179)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtnConfirmPassword:{
        fontFamily: 'Quicksand_Bold',
        color: 'white',
        fontSize: 20
    },
    marginBottom: {
        marginBottom: height * 0.1
    }
})

export default styles