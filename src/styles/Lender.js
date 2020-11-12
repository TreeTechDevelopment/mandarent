import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center' 
    },
    scrollView:{
        width,
        flex: 1
    },
    lenderInfoContainer:{
        width,
        alignItems: 'center'
    },
    lenderInfoNameContainer:{
        width: width * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10
    },
    lenderImage:{
        width: width * 0.3,
        height: width * 0.3,
        borderRadius: width * 0.15,
        marginRight: 20
    },
    lenderName:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 25
    },
    lenderRateContainer:{
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center'
    },
    lenderRate:{
        flexDirection: 'row',
        paddingRight: 20,
        borderRightColor: 'black',
        borderRightWidth: 1,
        alignItems: 'center'
    },
    lenderRateText:{ fontFamily: 'Quicksand_Book' },
    descriptionContainer:{
        width: width * 0.9,
        borderBottomColor: 'rgb(150,150,150)',
        borderBottomWidth: 2,
        paddingBottom: 20,
        marginBottom: 20
    },
    description:{
        fontFamily: 'Quicksand_Book',
        fontSize: 18
    },
    reviewsContainer:{
        width: width * 0.9,
        marginBottom: 20
    },
    reviewsTitle:{
        fontFamily: 'Quicksand_Book',
        fontSize: 25,
        marginBottom: 20
    },
    reviewContainer:{
        borderColor: 'rgb(100,100,100)',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginBottom: 20,
        width: width * 0.9
    },
    userReviewContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
    },
    userImageRound:{
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15
    },
    reviewLenderUserName:{
        fontFamily:'Quicksand_Bold',
        fontSize: 20
    },
    reviewLenderDate:{
        fontFamily:'Quicksand_Book',
        fontSize: 18
    },
    reviewLenderStarsContainer:{
        width: width * 0.4,
        alignItems: 'flex-end'
    },
    reviewText:{
        fontFamily: 'Quicksand_Book',
        fontSize: 17
    },
    seeReviewsText:{
        fontFamily:'Quicksand_Bold',
        fontSize: 15,
        color: 'rgb(46,116,175)' 
    },
    listingsContainer:{
        width: width * 0.9,
        alignItems: 'center'
    },
    titleContainer:{
        width: width * 0.9,
    },
    allReviewsContainer:{
        marginTop: 20
    },
    allReviews:{
        width
    },
    allReviewsTitle:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 25,
        marginLeft: width * 0.05,
        marginBottom: 20
    }
})

export default styles