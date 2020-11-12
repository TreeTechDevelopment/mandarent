import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get("window")

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    myItemsContainer:{
        flex: 1,
        width
    },
    item:{
        height: height * 0.4,
        width: width * 0.9,
        marginVertical: 10
    },
    itemImage:{
        width: width * 0.9,
        height: height * 0.25,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5
    },
    infoItemContainer: {
        width: width * 0.9,
        paddingVertical: 10,
        borderLeftColor: 'rgb(120,120,120)',
        borderBottomColor: 'rgb(120,120,120)',
        borderRightColor: 'rgb(120,120,120)',
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    itemName:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 20,
        marginLeft: 20
    },
    itemPriceContainer:{
        width: width * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    itemPrice:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemPriceLabel:{
        fontFamily: 'Quicksand_Book',
        fontSize: 20,
    },
    itemBtnContainer:{
        width: width * 0.9,
        borderTopColor: 'rgb(120,120,120)',
        borderTopWidth: 1,
        marginTop: 10,
        height: height * 0.05,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    itemTextBtn:{
        fontFamily: 'Quicksand_Book',
        fontSize: 20,
        color: 'rgb(20,100,249)'
    },
    inputSearchContainer:{
        width,
        paddingVertical: 10,
        marginTop: 10,
        alignItems: 'center'
    },
    inputSearch:{
        width: width * 0.9,
        height: height * 0.07,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    input:{
        fontSize: 17,
        fontFamily: 'Quicksand_Book',
        width: width * 0.8,
        paddingLeft: 10
    },
    scrollView:{
        flex: 1,
        width,
        paddingLeft: width * 0.05,
        paddingTop: 20
    },
    formEditItemContainer:{
        width: width * 0.9
    }
})

export default styles