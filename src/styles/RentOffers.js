import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    rentOffersContainer:{
        width,
        flex: 1,
    },
    rentOfferContainer:{
        width,
        paddingHorizontal: width * 0.05,
        backgroundColor: 'white'
    },
    RentOfferContainerRow:{
        width: width * 0.9,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    userInfoRentOfferTextContainer:{
        height: height * 0.1,
        justifyContent: 'center'
    },
    userInfoRentOfferContainer:{
        height: height * 0.1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textUserInfoRentOffer:{
        fontFamily: 'Quicksand_Book',
        fontSize: 17
    },
    messageBtnRentOffer:{
        width: width * 0.25,
        height: height * 0.06,
        backgroundColor: 'rgb(20,100,249)',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    messageBtnRentOfferText:{
        color: 'white',
        fontFamily: 'Quicksand_Bold',
        fontSize: 15
    },
    productRentOfferContainer:{
        width: width * 0.9,
    },
    productRentOfferTitle:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 20,
        color: 'rgb(106,106,106)'
    },
    productInfoRentOfferContainer:{
        width: width * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    productImageRentOffer:{
        width: width * 0.4,
        height: height * 0.15
    },
    productInfoRentOffer:{
        height: height * 0.15,
        width: width * 0.5,
        paddingLeft: 10,
        justifyContent: 'center'
    },
    productNameRentOffer:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 20,
        marginBottom: 5
    },
    labelRentOffer:{
        fontFamily: 'Quicksand_Book'
    },
    labelDayRentOffer:{
        fontSize: width * 0.04
    },
    hourProductRentOfferContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.5 - 10,
    },
    hourProductRentOffer: {
        justifyContent: 'center',
        width: width * 0.18,
        alignItems: 'center'
    },
    totalRentOffer:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 20,
        color: 'rgb(217,84,79)'
    },
    cancelBtnRentOffer:{
        width: width * 0.3,
        height: height * 0.07,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'rgb(200,200,200)',
        borderWidth: 1,
        borderRadius: 5
    },
    cancelBtnRentOfferText:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 15,
        color: 'black'
    },
    acceptBtnRentOffer:{
        width: width * 0.3,
        height: height * 0.07,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(217,84,79)',
        borderRadius: 5
    },
    acceptBtnRentOfferText:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 15,
        color: 'white'
    },
    borderBottomLineRentOffer:{
        borderBottomColor: 'rgb(30,30,30)',
        borderBottomWidth: 1,
        width: width * 0.9,
        elevation: 6,
        marginBottom: 10,
    },
    separatorRentOffer:{
        width,
        alignItems: 'center'
    },
    rentOperationContainer:{
        width: width * 0.9 + 20,
        borderColor: 'rgb(121,121,121)',
        borderWidth: 2,
        borderRadius: 2,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        position: 'relative',
        top: -1
    },
    userTypeRentOperation:{
        borderBottomColor: 'rgb(121,121,121)',
        borderBottomWidth: 1,
        paddingRight: 10
    },
    userTypeRentOperationText:{
        fontFamily: 'Quicksand_Book',
        fontSize: 25
    }
})

export default styles