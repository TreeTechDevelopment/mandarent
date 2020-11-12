import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    topBar: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width,
        paddingVertical: 20,
        paddingHorizontal: width * 0.05
    },
    titleContainer: {
        width : width * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },
    titleTopBar:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 30,
        marginLeft: 10
    },
    textTopBar:{
        fontFamily: 'Quicksand_Book',
        fontSize: 15,
        marginLeft: 10
    },
    itemsContainer:{
        flex: 1,
        width
    },
    item: {
        width: width * 0.9,
        borderColor: 'rgb(90,90,90)',
        borderWidth: 1,
        borderRadius: 15,
        marginTop: 20,
        paddingVertical: 10
    },
    itemUserInfoContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.9,
        paddingHorizontal: 20,
        marginVertical: 10
    },
    itemUserImage:{
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 20
    },
    itemUsername:{
        fontFamily: 'Quicksand_Book',
        fontSize: 25,
        color: 'rgb(90,90,90)'
    },
    itemUserRateContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemUserRate:{
        fontFamily: 'Quicksand_Book',
        fontSize: 18
    },
    itemName:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 22,
        marginLeft: 20
    },
    itemUserLocation:{
        fontFamily: 'Quicksand_Book',
        fontSize: 20
    },
    itemRentPeriodContainer:{
        width: width * 0.9,
        paddingHorizontal: 20,
        marginBottom: 10
    },
    itemRentPeriod:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemRentDateContainer:{
        alignItems: 'center',
    }
})

export default styles;