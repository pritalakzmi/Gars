import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity, _View, SafeAreaView } from 'react-native';
import { fontType, colors } from '../../theme';

export default function Profile() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.profileContainer}>
                    <Image source={require('../../assets/images/prita.jpg')} style={styleProfileImage.image} />
                    <Text style={styles.text1}>pritalakzmi</Text>
                </View>
            <ButtonEdit />
            <ButtonLike />
            <ButtonPurchaseHistory />
            <ButtonHelpReport/>
            <ButtonSetUp/>
            </ScrollView>
        </View>
    );
}

const ButtonEdit = () => {
    return (
        <View style={buttonStyle.container} >
            <View style={buttonStyle.buttonAdd}>
                <TouchableOpacity
                    style={buttonStyle.button}
                    activeOpacity={0.5}
                    onPress={() => { }}>
                    <Text style={styles.text2}>Edit Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const ButtonLike = () => {
    return (
        <View style={buttonLikeStyle.container}>
            <TouchableOpacity
                style={buttonLikeStyle.button}
                activeOpacity={0.5}
                onPress={() => { }}>
                <Image source={require('../../assets/images/iconLikeFilled.png')} style={buttonLikeStyle.icon} />
                <Text style={styles.text3}>My Favorite</Text>
            </TouchableOpacity>
        </View>
    );
}

const ButtonPurchaseHistory = () => {
    return (
        <View style={buttonPurchaseHistoryStyle.container}>
            <TouchableOpacity
                style={buttonPurchaseHistoryStyle.button}
                activeOpacity={0.5}
                onPress={() => { }}>
                <Text style={styles.text4}>Purchase History</Text>
                <Image source={require('../../assets/images/purchaseHistory.png')} style={buttonPurchaseHistoryStyle.icon} />
            </TouchableOpacity>
        </View>
    );
}

const ButtonHelpReport = () => {
    return (
        <View style={buttonHelpReport.container}>
            <TouchableOpacity
                style={buttonHelpReport.button}
                activeOpacity={0.5}
                onPress={() => { }}>
                <Text style={styles.text5}>Help & Report</Text>
                <Image source={require('../../assets/images/report.png')} style={buttonHelpReport.icon} />
            </TouchableOpacity>
        </View>
    );
}

const ButtonSetUp = () => {
    return (
        <View style={buttonSetUp.container}>
            <TouchableOpacity
                style={buttonSetUp.button}
                activeOpacity={0.5}
                onPress={() => { }}>
                <Text style={styles.text6}>Set Up Account</Text>
                <Image source={require('../../assets/images/user.png')} style={buttonSetUp.icon} />
            </TouchableOpacity>
        </View>
    );
}

const styleProfileImage = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
        alignSelf: 'center',
        marginTop: 40,
    },
});

const buttonStyle = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    buttonAdd: {
        // paddingTop: 90,
        textAlign: 'center',
    },
    button: {
        textAlign: 'center',
        width: 120,
        height: 40,
        padding: 6,
        marginBottom: 10,
        backgroundColor: 'grey',
        backgroundColor: 15,
        borderRadius: 10,
    },
});

const buttonLikeStyle = StyleSheet.create({
    container: {
        alignItems: 'left',
    },
    button: {
        textAlign: 'center',
        width: 380,
        height: 50,
        padding: 6,
        marginTop: 10,
        marginLeft: 17,
        backgroundColor: '#FAF0E6',
        backgroundColor: 10,
        borderRadius: 10,
    },
    icon: {
        width: 30,
        height: 30,
        marginBottom: 10,
        alignSelf: 'left',
        marginTop: 5,
        marginLeft: 15,
    },
});

const buttonPurchaseHistoryStyle = StyleSheet.create({
    container: {
        alignItems: 'left',
    },
    button: {
        textAlign: 'center',
        width: 380,
        height: 50,
        padding: 6,
        marginTop: 10,
        marginLeft: 17,
        backgroundColor: '#FAF0E6',
        backgroundColor: 10,
        borderRadius: 10,
    },
    icon: {
        width: 30,
        height: 30,
        marginBottom: 20,
        alignSelf: 'left',
        marginTop: -22,
        marginLeft: 15,
    },
});

const buttonHelpReport = StyleSheet.create({
    container: {
        alignItems: 'left',
    },
    button: {
        textAlign: 'center',
        width: 380,
        height: 50,
        padding: 6,
        marginTop: 10,
        marginLeft: 17,
        backgroundColor: '#FAF0E6',
        backgroundColor: 10,
        borderRadius: 10,
    },
    icon: {
        width: 30,
        height: 30,
        marginBottom: 20,
        alignSelf: 'left',
        marginTop: -22,
        marginLeft: 15,
    },
});

const buttonSetUp = StyleSheet.create({
    container: {
        alignItems: 'left',
    },
    button: {
        textAlign: 'center',
        width: 380,
        height: 50,
        padding: 6,
        marginTop: 10,
        marginLeft: 17,
        backgroundColor: '#FAF0E6',
        backgroundColor: 10,
        borderRadius: 10,
        marginBottom: 320,
    },
    icon: {
        width: 30,
        height: 30,
        marginBottom: 20,
        alignSelf: 'left',
        marginTop: -22,
        marginLeft: 15,
    },
});

const styles = StyleSheet.create({
    text1: {
        fontSize: 15,
        color: 'black',
        padding: 20,
        paddingLeft: 30,
        marginTop: -30,
        fontFamily: fontType['Pjs-ExtraBold'],
        textAlign: 'center'
    },
    text2: {
        fontSize: 13,
        color: 'black',
        paddingTop: 4,
        fontFamily: fontType['Pjs-ExtraBold'],
        textAlign: 'center',
    },
    text3: {
        fontSize: 15,
        color: 'black',
        marginTop: -36,
        fontFamily: fontType['Pjs-Medium'],
        marginLeft: 70,
        textAlign: 'left',
    },
    text4: {
        fontSize: 15,
        color: 'black',
        marginTop: 6,
        fontFamily: fontType['Pjs-Medium'],
        marginLeft: 70,
        textAlign: 'left',
    },
    text5: {
        fontSize: 15,
        color: 'black',
        marginTop: 6,
        fontFamily: fontType['Pjs-Medium'],
        marginLeft: 70,
        textAlign: 'left',
    },
    text6: {
        fontSize: 15,
        color: 'black',
        marginTop: 6,
        fontFamily: fontType['Pjs-Medium'],
        marginLeft: 70,
        textAlign: 'left',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

