import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    flex1: { flex: 1 },
    mainContainer:{
        flex: 1,
        backgroundColor: 'white'
    },
    containerCentered: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchInputContainer: {
        width: width * 0.8,
        height: height * 0.07,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: 'white',
        position: 'relative',
        top: -3,
    },
    searchInput:{
        width: width * 0.68
    },
    subTitle:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 20,
        color: 'rgb(62,62,62)' 
    },
    container:{
        width,
        paddingHorizontal: width * 0.1,
        paddingTop: 20
    },
    categoryIcon:{
        width: 50,
        height: 50,
        marginHorizontal: 20
    },
    categoriesIconList:{
        width: width * 0.8,
        marginTop: 10
    },
    recommendationCard: {
        width: width * 0.6,
        height: height * 0.25,
        backgroundColor: 'white',
        borderRadius: 20,
        position: 'relative',
        top: -4,
        left: 2
    },
    recommendationList:{
        width,
        marginTop: 10,
        paddingVertical: 10,
        height: height * 0.3
    },
    recommendationImage:{
        width: width * 0.6,
        height: height * 0.17,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    recommendationTitle:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 15,
        color: 'rgb(62,62,62)',
        marginLeft: 10
    },
    recommendationText: {
        fontFamily: 'Quicksand_Book',
        fontSize: 11,
        color: 'black',
        marginLeft: 10
    },
    recommendationTextContainer: {
        height: height * 0.08,
        flex: 1,
        justifyContent: 'center',
        width: width * 0.6
    },
    paddingLeft: { paddingLeft: width * 0.1 },
    trendCard: {
        width: width * 0.8,
        height: height * 0.4
    },
    trendCarouselContainer:{
        width: width * 0.8,
        height: height * 0.25,
    },
    trendTextContainer:{
        width: width * 0.8,
        height: height * 0.15,
        paddingTop: 10
    },
    trendImage:{
        width: width * 0.8,
        height: height * 0.25, 
        borderRadius: 20
    },
    trendCarouselIndicatorContainer:{
        flexDirection: 'row',
        position: 'relative',
        height: 20,
        top: -30,
        width: width * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    trendCarouselIndicatorActive:{
        color: 'white',
        fontSize: 30,
        marginHorizontal: 2
    },
    trendCarouselIndicator:{
        color: 'rgba(255,255,255,0.7)',
        fontSize: 15,
        marginHorizontal: 2
    },
    trendHeartIconContainer: {
        width: width * 0.8,
        justifyContent: "flex-end",
        alignItems: 'center',
        position: 'relative',
        top: 40,
        height: 20,
        zIndex: 2,
        paddingRight: 20,
        flexDirection: 'row'
    },
    trendStarsContainer: { 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    trendTextLight:{
        fontFamily: 'Quicksand_Light'
    },
    trendInfoContainer:{
        flexDirection: 'row',
        width: width * 0.8,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 10
    },
    trendTextNormal:{
        fontFamily: 'Quicksand_Book',
        fontSize: 20
    },
    trendTextBold:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 20
    },
})

export default styles;