import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    topBar:{
        borderBottomColor: 'rgb(223,223,223)',
        borderBottomWidth: 2,
        width,
        paddingVertical: 10,
        paddingLeft: width * 0.05
    },
    topBarTitle:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 30
    },
    searchContainer:{
        width: width * 0.9,
        backgroundColor: 'rgb(240,240,240)',
        marginVertical: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        paddingHorizontal: 20
    },
    searchInput:{
        fontFamily: 'Quicksand_Book',
        fontSize: 15,
        color: 'rgb(150,150,150)',
        marginLeft: 10,
        minWidth: width * 0.3,
    },
    scrollViewChats:{
        flex: 1,
        width,
    },
    chatItemContainer:{
        width: width * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginBottom: 10,
    },
    userImageRound: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 20
    },
    usernameChatContainer:{
        width: width * 0.45,
    },
    usernamerChatItem:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 20
    },
    lastMessageSeen:{
        fontFamily: 'Quicksand_Book',
        fontSize: 15
    },
    lastMessage:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 15
    },
    timeMessageContainer:{
        alignItems: 'flex-end',
        height: 60,
        justifyContent: 'space-between',
        paddingVertical: 5,
        flex: 1,
    },
    timeMessage:{
        fontFamily: 'Quicksand_Book',
        fontSize: 12
    },
    messageNotSeenIndicator:{
        color: 'red',
        fontSize: 30
    },
    chatTopBar:{
        width,
        height: height * 0.1,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: 'rgb(150,150,150)',
        borderBottomWidth: 1,
    },
    chatTopBarArrowContainer:{
        flex: 1,
        paddingLeft: width * 0.05
    },
    chatTopBarTitleContainer:{
        flex: 2,
        alignItems: 'center',
        marginLeft: -width * 0.05
    },
    chatTopBarTitle:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 25
    },
    inputContainer:{
        position: 'absolute',
        bottom: height * 0.01,
        left: 0,
        width,
        height: height * 0.1,
        borderTopColor: 'rgb(70,70,70)',
        borderTopWidth: 1,
        borderBottomColor: 'rgb(70,70,70)',
        borderBottomWidth: 1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    input:{
        width: width * 0.8,
        height: height * 0.07,
        fontFamily: 'Quicksand_Book',
        fontSize: 17,
    },
    chatContainer:{
        width,
        height: height * 0.79
    },
    chatScrollView:{ flex: 1 },
    messageContainerRow:{
        width,
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingHorizontal: width * 0.05,
        marginVertical: 10
    },
    messageContainer:{ width: width * 0.7 },
    messageUsername:{
        fontFamily: 'Quicksand_Bold',
        fontSize: 20
    },
    message:{
        fontFamily: 'Quicksand_Book',
        fontSize: 15
    }
})

export default styles