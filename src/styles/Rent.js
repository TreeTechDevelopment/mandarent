import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center'
    },
    topBar: {
        width,
        height: height * 0.1,
        justifyContent: 'center',
        paddingLeft: width * 0.05
    },
    form:{
        width: width * 0.9,
        height: height * 0.8,
    },
    formStep2:{
        width: width * 0.9,
        height: height * 0.83,
    },
    title: {
        fontFamily: 'Quicksand_Bold',
        fontSize: 30,
        color: 'rgb(35,35,35)',
        marginBottom: 40
    },
    label: {
        fontFamily: 'Quicksand_Bold',
        fontSize: 20,
        marginBottom: 10
    },
    input: {
        borderColor: 'rgb(90,90,90)',
        borderWidth: 1,
        borderRadius: 5,
        fontFamily: 'Quicksand_Book',
        fontSize: 20,
        paddingLeft: 15,
        marginBottom: 20,
        height: height * 0.06
    },
    textArea: {
        borderColor: 'rgb(90,90,90)',
        borderWidth: 1,
        borderRadius: 5,
        fontFamily: 'Quicksand_Book',
        fontSize: 20,
        paddingHorizontal: 15,
        marginBottom: 20,
        height: height * 0.15,
        textAlignVertical: "top",
        color: 'black'
    },
    textAreaDisable: {
        borderColor: 'rgb(90,90,90)',
        borderWidth: 1,
        borderRadius: 5,
        fontFamily: 'Quicksand_Book',
        fontSize: 20,
        paddingHorizontal: 15,
        marginBottom: 20,
        height: height * 0.15,
        textAlignVertical: "top",
        backgroundColor: 'rgb(146,146,146)',
        color: 'white'
    },
    checkBoxContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkBoxLabel:{
        fontFamily: 'Quicksand_Book'
    },
    btnNextContainer:{
        width: width * 0.9,
        alignItems: 'flex-end',
        marginTop: 10,
        position: 'absolute',
        bottom: 0,
    },
    btnNext: {
        width: width * 0.4,
        height: height * 0.07,
        backgroundColor: 'rgb(249,95,107)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    btnNextText:{
        color: 'white',
        fontFamily: 'Quicksand_Bold',
        fontSize: 20
    },
    btnAddPhotos:{
        borderColor: 'black',
        borderWidth: 1,
        width: width * 0.9,
        height: height * 0.2,
        marginTop: 10,
        alignItems: 'center',
        paddingTop: 30,
        borderStyle: "dashed",
        borderRadius: 5,
        marginBottom: 20,
    },
    btnAddPhotosText:{
        fontFamily: 'Quicksand_Book',
        marginTop: 20,
        fontSize: 20
    },
    pickerLabel:{
        fontFamily: 'Quicksand_Book',
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10
    },
    picker:{
        width: width * 0.85,
        height: height * 0.07,
    },
    pickerContainer:{
        borderColor: 'rgb(35,35,35)',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 10
    },
    label2: {
        fontFamily: 'Quicksand_Book',
        fontSize: 15
    },
    rentPeriodContainer:{
        flexDirection: 'row',
        width: width * 0.9,
        height: height * 0.1,
        marginTop: 20,
        marginBottom: height * 0.07
    },
    rentHours:{
        width: width * 0.45,
        height: height * 0.07,
        borderRightColor: 'black',
        borderRightWidth: 1,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    rentDays:{
        width: width * 0.45,
        height: height * 0.07,
        borderLeftColor: 'black',
        borderLeftWidth: 1,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    pickerHoursContainer:{
        width: width * 0.23,
        height: height * 0.05,
        borderColor: 'rgb(35,35,35)',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10
    },
    pickerHours:{
        width: width * 0.2,
        height: height * 0.05,
    },
    textPickerPeriodRent:{
        fontFamily: 'Quicksand_Book',
        marginLeft: 10,
        fontSize: 20
    },
    inputDaysRentPeriod: {
        borderColor: 'rgb(35,35,35)',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        width: width * 0.23,
        height: height * 0.05,
        fontFamily: 'Quicksand_Book',
        color: 'black',
        fontSize: 19,
        paddingTop: 0,
        paddingBottom:0
    },
    priceRentContainer: {
        width: width * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    priceRentPeriodContainer:{
        width: width * 0.4,
        alignItems: 'center'
    },
    textPriceRent:{
        fontFamily:'Quicksand_Book',
        fontSize: 20
    },
    inputPriceContainer:{
        width: width * 0.25,
        height: height * 0.07,
        borderColor: 'rgb(35,35,35)',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 15,
        flexDirection: 'row',
        paddingLeft: 10,
        alignItems: 'center'
    },
    labelPriceText:{
        fontFamily: 'Quicksand_Bold',
        color: 'rgb(192,192,192)'
    },
    inputPrice:{
        fontFamily: 'Quicksand_Book',
        width: width * 0.15,
        height: height * 0.07,
        marginLeft: 10,
        fontSize: 20
    },
    inputDiscount:{
        fontFamily: 'Quicksand_Book',
        fontSize: 17,
    },
    imageRentContainer:{
        width: width * 0.9,
        alignItems: 'center',
        marginBottom: 20
    },
    btnAddImagesContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    btnAddImagesText:{
        fontFamily: 'Quicksand_Book',
        color: 'rgb(95,110,239)',
        fontSize: 20
    },
    imagesRentContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 30
    },
    imageRent:{
        width: width * 0.33,
        height: width * 0.3,
        marginBottom: 10
    },
    imageContainer:{
        flexDirection: 'row'
    },
    iconDeleteImageRentContainer:{
        width: 30,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        left: -35,
        top: 10
    },
    inputDiscountContainer:{
        width: width * 0.9,
        borderBottomColor:'black',
        borderBottomWidth: 2,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default styles