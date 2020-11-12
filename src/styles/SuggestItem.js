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
        paddingVertical: 10,
        paddingHorizontal: width * 0.05
    },
    topBarTitle:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 30,
        marginVertical: 10
    },
    topBarLine:{
        borderColor: 'rgb(150,150,150)',
        borderWidth: 0.5,
        width: width * 0.9,
        marginTop: 10
    },
    item:{
        borderColor: 'rgb(150,150,150)',
        borderWidth: 1,
        borderRadius: 10,
        width: width * 0.9,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemImage:{
        width: width * 0.3,
        height: width * 0.3,
        borderRadius: 10,
        marginRight: 10
    },
    itemName:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 18,
        marginBottom: 20
    },
    priceItemContainer:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    priceItemText:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 15
    },
    priceItemLabel:{
        fontFamily: 'Quicksand_Book',
        fontSize: 15
    },
    itemBtn:{
        width: width * 0.25,
        height: height * 0.05,
        backgroundColor: 'rgb(22,156,181)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginLeft: width * 0.08
    },
    itemBtnText:{
        fontFamily: 'Quicksand_Bold',
        color: 'white',
        fontSize: 15
    },
    itemContainer:{
        width,
    },
    bottomTab: {
        width,
        height: height * 0.2,
        alignItems: 'center',
        paddingHorizontal: width * 0.05
    },
    bottomTabText:{
        marginVertical: 10,
        fontFamily: 'Quicksand_Book',
        fontSize: 14
    },
    btn:{
        width: width * 0.4,
        height: height * 0.05,
        backgroundColor: 'rgb(218,83,79)',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    btnText:{
        fontFamily: 'Quicksand_Bold',
        color: 'white',
        fontSize: 20
    }
})

export default styles