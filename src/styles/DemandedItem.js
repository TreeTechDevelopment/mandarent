import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    arrowBackContainer:{
        width: width * 0.9,
        paddingVertical: 20
    },
    infoContainer:{
        flex: 1,
        width,
        marginBottom: height * 0.1
    },
    sectionContainer:{
        width: width * 0.9,
        marginVertical: 10
    },
    itemName:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 30
    },
    categoriesContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemCategory:{
        fontFamily: 'Quicksand_Book',
        fontSize: 15
    },
    infoUserContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    },
    userImg:{
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 20
    },
    userName:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 25,
        color : 'rgb(97,97,97)',
        marginBottom: 10
    },
    itemUserRate:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 18
    },
    userRateContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleCategory:{
        fontFamily: 'Quicksand_Book',
        fontSize: 25
    },
    subtitleCategory:{
        fontFamily: 'Quicksand_Book',
        fontSize: 18
    },
    itemDateContainer:{
        alignItems: 'center',
        marginLeft: 10
    },
    itemDate:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 20
    },
    itemHour:{
        fontFamily: 'Quicksand_Book',
        fontSize: 18
    },
    btnContainer:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width,
        height: height * 0.1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn:{
        width: width * 0.5,
        height: height * 0.07,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: 'rgb(217,84,79)'
    },
    btnText:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 20,
        color: 'white'
    }
})

export default styles