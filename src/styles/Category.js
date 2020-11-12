import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    flex1:{ flex: 1 },
    topBarContainer:{
        width,
        alignItems: 'center',
    },
    topBarRow:{
        width,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    inputSearchContainer:{
        width: width * 0.4,
        height: height * 0.05,
        borderColor: 'rgb(76,76,76)',
        borderWidth: 1,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5
    },
    inputSearch:{
        fontFamily: 'Quicksand_Book',
        width: width * 0.3,
        marginLeft: 5,
        fontSize: 17,
        paddingVertical: 0
    },
    titleCategory:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 20,
        color: 'rgb(76,76,76)'
    },
    filterBtn:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: height * 0.05,
        flexDirection: 'row'
    },
    textFilter:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 20,
        marginLeft: 10,
        color: 'rgb(76,76,76)'
    },
    
    filterBtnContainer:{
        width: width * 0.9,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderBottomColor: 'rgb(200,200,200)',
        borderBottomWidth: 1,
        paddingBottom: 10
    },
    listingContainer:{
        flex: 1,
        width,     
    }
})

export default styles