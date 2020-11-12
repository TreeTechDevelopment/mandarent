import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    topBar:{
        width,
        height: height * 0.1,
        borderBottomColor: 'rgb(120,120,120)',
        borderBottomWidth: 2,
        paddingHorizontal: width * 0.05,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        position: 'relative',
        top: -3
    },
    iconContainerTopBar:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    textTopBar:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 25,
        marginLeft: 20
    },
    balanceContainer:{
        width: width * 0.4,
        height: height * 0.06,
        borderWidth: 2,
        borderColor: 'rgb(33,67,104)',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    balanceText:{
        fontFamily: 'Quicksand_Book',
        fontSize: 20
    },
    itemsContainer:{
        width,
        paddingTop: 20
    },
    itemContainer:{
        width: width * 0.9,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: 'rgba(0,0,0,0.3)',
        borderWidth: 0.5,
        paddingBottom: 20,
        alignItems: 'center'
    },
    itemNameContainer:{
        width: width * 0.9,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'space-between'
    },
    itemName:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 20
    },
    infoItemContainer:{
        width: width * 0.9,
        paddingVertical: 10
    },
    imageItemContainer:{
        width: width * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    rateItemContainer:{
        alignItems: 'center',
        flexDirection: 'row'
    },
    itemText:{
        fontFamily: 'Quicksand_Book',
        fontSize: 20
    },
    itemImage:{
        width: width * 0.3,
        height: height * 0.1
    },
    lenderNameContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    datesContainer:{
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.9
    },
    dateContainer:{
        alignItems: 'center',
        marginRight: 10
    },
    date:{
        fontFamily:'Quicksand_Bold',
        fontSize: 18
    },
    serviceFeeContainer:{
        width: width * 0.9,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingVertical: 10
    },
    rentLabel:{
        fontFamily: 'Quicksand_Book',
        fontSize: 25
    },
    serviceFeeText:{
        maxWidth: width * 0.5,
        fontFamily: 'Quicksand_Book',
        fontSize: 18,
        color: 'rgb(150,150,150)'
    },
    serviceFeeTextWider:{
        maxWidth: width * 0.6,
        fontFamily: 'Quicksand_Book',
        fontSize: 18,
        color: 'rgb(150,150,150)'
    },
    payBtn:{
        width: width * 0.3,
        height: height * 0.07,
        backgroundColor: 'rgb(251, 93, 107)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    payBtnText:{
        color: 'white',
        fontFamily: 'Quicksand_Bold',
        fontSize: 20
    },
    lineDivider:{
        width: width * 0.8,
        borderColor:'black',
        borderWidth: 1,
        marginVertical: 10
    }
})

export default styles