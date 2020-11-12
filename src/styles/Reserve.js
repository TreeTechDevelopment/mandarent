import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center'
    },
    calendarContainer:{
        width,
    },
    periodReserveContainer:{
        marginVertical: 20,
        width,
        paddingHorizontal: width * 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    periodDay:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 20
    },
    dateHourPeriodContainer:{
        alignItems: 'center'
    },
    periodHour:{
        fontFamily: 'Quicksand_Book',
        fontSize: 18
    },
    slidersContainer:{
        width,
        paddingVertical: 10,
        paddingHorizontal: width * 0.05,
        marginTop: 20
    },
    sliderContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    spinnerContainer:{
        width: width * 0.6,
        borderTopColor: 'black',
        borderTopWidth: 1,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingVertical: 10
    },
    spinnerText:{
        fontFamily: 'Quicksand_Book',
        fontSize: width * 0.04,
        marginHorizontal: 11,
        color: 'rgb(150,150,150)'
    },  
    sliderLabel:{
        fontFamily: 'Quicksand_Book',
        fontSize: 20
    },
    textSpinnerContainer: {
        width: width * 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnContainer:{
        width,
        position: 'absolute',
        bottom: 0,
        left: 0,
        paddingVertical: 20,
        alignItems: 'flex-end',
        paddingHorizontal: 20
    },
    btn:{
        width: width * 0.4,
        height: height * 0.07,
        backgroundColor: 'rgb(251, 93, 107)',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: 'white',
        fontFamily: 'Quicksand_Bold',
        fontSize: 20
    },
})

export default styles;