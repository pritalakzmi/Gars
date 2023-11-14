import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity, _View, SafeAreaView } from 'react-native';
import { fontType, colors } from '../../theme';
import { ListBlog } from '../../components';

export default function Product() {
    // const { blogId } = route.params;
    // const styles = ListBlog.find(blog => blog.id === blogId);
    // const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <ScrollView>
                    {/* <View style={styles.box} ></View> */}
                    <Image source={require('../../assets/images/janakmerah.png')} style={styleGambarProduct.image} />
                    <Text style={styles.text1}>Jersey Merah Anak-Anak</Text>
                    <Text style={styles.text2}>Rp. 299.000</Text>
                    <Text style={styles.text3}>Dengan Pilihan Warna :</Text>   
                    <Text style={styles.text4}></Text>
                    <Text style={styles.text5}>SIZE Chart Baju : </Text>
                    <Text style={styles.text6}>6 : Body Width 36cm x Body Lenght 47cm </Text>
                    <Text style={styles.text6}>8 : Body Width 38cm x Body Lenght 49cm</Text>
                    <Text style={styles.text6}>10 : Body Width 40cm x Body Lenght 51cm</Text>
                    <Text style={styles.text6}>12 : Body Width 42cm x Body Lenght 53cm</Text>
                </ScrollView>
                <ButtonTitle />
            </View>
        </View>
    );
}

const ButtonTitle = () => {
    return (
        <View style={buttonStyle.container} >
            <View style={buttonStyle.buttonAdd}>
                <TouchableOpacity
                    style={buttonStyle.button}
                    activeOpacity={0.5}
                    onPress={() => { }}>
                    <Text style={styles.text7}>Add To Chart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const buttonStyle = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    buttonAdd: {
        marginTop: -90,
        textAlign: 'center',
    },
    button: {
        textAlign: 'center',
        width: 300,
        padding: 8,
        marginTop: 10,
        backgroundColor: 'red',
        borderRadius: 30,
    },
});


const styles = StyleSheet.create({
    text1: {
        fontSize: 25,
        color: 'black',
        padding: 20,
        paddingLeft: 30,
        fontFamily: fontType['Pjs-ExtraBold'],
    },
    text2: {
        fontSize: 20,
        color: 'black',
        paddingTop: 1,
        paddingRight: 40,
        fontFamily: fontType['Pjs-ExtraBold'],
        textAlign: 'right',
    },
    text3: {
        fontSize: 15,
        color: 'black',
        paddingTop: 10,
        paddingLeft: 30,
        fontFamily: fontType['Pjs-ExtraBold'],
    },
    text4: {
        fontSize: 15,
        color: 'red',
        width: 10,
        height: 30,
        padding: 10,
        paddingLeft: 20,
        margin: 10,
        backgroundColor: 'red',
        borderRadius: 10,
        marginLeft: 40,
    },
    text5: {
        fontSize: 15,
        color: 'black',
        paddingTop: 5,
        paddingLeft: 30,
        fontFamily: fontType['Pjs-ExtraBold'],
        paddingVertical: 10,
    },
    text6: {
        fontSize: 15,
        color: 'black',
        paddingTop: 1,
        paddingLeft: 40,
        paddingVertical: 10,
        fontFamily: fontType['Pjs-SemiBold'],
    },
    text7: {
        fontSize: 15,
        color: 'white',
        paddingTop: 5,
        paddingLeft: 100,
        paddingVertical: 10,
        fontFamily: fontType['Pjs-ExtraBold'],
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    text: {
        backgroundColor: 'white',
        color: 'black',
        fontStyle: 'Pjs-Bold',
        fontSize: 20,
        padding: 0,
        paddingLeft: 10,
        marginTop: 0,
    },
});

const styleGambarProduct = StyleSheet.create({
    container: {
        height: 0,
        backgroundColor: 'red',
    },
    gambar: {
        width: 10,
        height: 10,
        resizeMode: 'cover'
    },
});