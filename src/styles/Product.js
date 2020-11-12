import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: 'white',
        flex: 1,
        paddingBottom: height * 0.1
    },
    topBar:{
        width,
        height: height * 0.4,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        alignItems: 'center',
        elevation: 5,
        position: 'relative',
        top: -10,
        backgroundColor: 'white'
    },
    topBarButtonsContainer: {
        width,
        height: height * 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        paddingTop: 20,
        zIndex: 1
    },
    topBarButtonsRightContainer:{
        flexDirection: 'row',
    },
    infoProductContainer: {
        width,
        paddingHorizontal: width * 0.1,
        paddingTop: 10
    },
    titleProduct: {
        fontFamily: 'Quicksand_Bold',
        fontSize: 25,
        color: 'rgb(92,92,92)'
    },
    starsLocationProductContainer:{
        width: width * 0.8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },
    messageLenderText: {
        fontFamily: 'Quicksand_Book',
        color: 'rgb(100,100,100)',
        fontSize: 18
    },
    messageLender: {
        borderColor: 'rgb(100,100,100)',
        borderWidth: 1,
        borderRadius: 5,
        width: width * 0.6,
        height: height * 0.05,
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mapContainer:{
        width,
        paddingHorizontal: width * 0.05,
        marginTop: 20
    },
    map: {
        width: width * 0.9,
        height: height * 0.32,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20
    },
    locationNameContainer: {
        width: width * 0.9,
        borderColor: 'black',
        borderWidth: 1,
        height: height * 0.05,
        borderRadius: 3,
        justifyContent: 'center',
        paddingLeft: 10
    },
    locationText: {
        fontFamily: 'Quicksand_Bold'
    },
    marginLeft:{
        marginLeft: width * 0.05
    },
    bottomTab: {
        borderTopColor: 'black',
        borderTopWidth: 2,
        position: 'absolute',
        bottom: 0,
        left: 0,
        width,
        height : height * 0.1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    bottomTabText: {
        fontFamily: 'Quicksand_Bold'
    },
    bottomTabBtn: {
        width: width * 0.4,
        height: height * 0.07,
        backgroundColor: 'rgb(251, 93, 107)',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomTabBtnText: {
        color: 'white',
        fontFamily: 'Quicksand_Bold',
        fontSize: 20
    },
    infoProductDescriptionContainer: { 
        borderColor: 'black',
        borderWidth: 1,
        width: width * 0.8,
        marginTop: 20,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    infoProductDescription: {
        fontFamily: 'Quicksand_Book'
    },
    userImageRound: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 20
    },
    reviewUserPhotoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    reviewUsername: {
        fontFamily: 'Quicksand_Bold',
        fontSize: 20,
    },
    reviewText: {
        fontFamily: 'Quicksand_Book'
    },
    imageSimilarListingItem:{
        width: width * 0.3,
        height: width * 0.3,
        marginHorizontal: 10,
        borderRadius: 10
    },
    imageSimilarList:{
        width,
        height: height * 0.2,
        position: 'relative',
        left: -width * 0.1,
        marginBottom: 20
    },
    marginLeftImagesListings: {
        marginLeft: width * 0.1
    }, 
    productCarouselContainer:{
        width,
        height: height * 0.4,
        position: 'relative',
        top: -height * 0.1,
        zIndex: 0
    },
    productCarousel:{
        width,
        height: height * 0.4,
    },
    productCarouselIndicatorContainer:{
        flexDirection: 'row',
        position: 'relative',
        height: 20,
        top: -30,
        width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topBarIconContainer: {
        width: 45,
        height: 45,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22.5
    },
    lenderInfoContainer:{
        width,
        paddingHorizontal: width * 0.1,
        paddingTop: 20
    },
    lenderRateContainer: {
        flexDirection: 'row',
        width: width * 0.8,
        justifyContent: 'space-between',
        marginBottom: 10
    },
    lenderRate:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    lenderRateText:{
        fontFamily: 'Quicksand_Book'
    },
    lenderImage:{
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 20
    },
    lenderImageContainer:{
        width: width * 0.8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    lenderName:{
        fontFamily: 'Quicksand_Book',
        fontSize: 20
    }
})

export default styles