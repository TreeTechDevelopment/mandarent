import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    logo: {
        width: width * 0.6,
        height: height * 0.25,
        marginTop: height * 0.05,
    },
    titleContainer: { width: width * 0.75 },
    title: {
        fontFamily: 'Quicksand_Bold',
        fontSize: 30,
        color: 'rgb(55,65,67)',
        marginBottom: 10
    },
    subTitle:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 17,
        color: 'rgb(185,185,185)',
    },
    form: {
        width: width * 0.75,
        marginTop: 40
    },
    label: {
        fontFamily: 'Quicksand_Bold',
        fontSize: 15,
        color: 'rgb(255,102,34)',
        marginTop: 20
    },
    input: {
        borderBottomColor: 'rgb(185,185,185)',
        borderBottomWidth: 1,
        width: width * 0.75,
        fontFamily: 'Quicksand_Bold',
        fontSize: 15
    },
    inputPassword:{
        borderBottomWidth: 0,
        width: width * 0.7
    },
    inputPasswordContainer: {
        borderBottomColor: 'rgb(185,185,185)',
        borderBottomWidth: 1,
        width: width * 0.75,
        flexDirection: 'row',
        alignItems: 'center'
    },
    btn: {
        width: width * 0.75,
        height: height * 0.08,
        backgroundColor: 'rgb(255,102,34)',
        marginTop: 60,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: 'white',
        fontFamily: 'Quicksand_Bold',
        fontSize: 20
    },
    footerForm: {
        width: width * 0.75,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 50
    },
    forgotPasswordLabel:{
        color: 'rgb(185,185,185)',
        fontFamily: 'Quicksand_Bold',
        fontSize: 17
    },
    signUpLabel:{
        color: 'rgb(255,102,34)',
        fontFamily: 'Quicksand_Bold',
        fontSize: 17
    },
    countryCodePhoneNumber:{
        color: 'rgb(185,185,185)',
        fontFamily: 'Quicksand_Book',
    },
    privacyLabelConatiner: {
        flexDirection: 'row',
        width: width * 0.75,
        justifyContent: 'center',
        marginTop: 60
    },
    privacyText:{
        fontFamily: 'Quicksand_Book'
    },
    privacyTextLink:{
        color: 'rgb(255,102,34)',
        fontFamily: 'Quicksand_Bold',
        fontSize: 15
    }
})

export default styles