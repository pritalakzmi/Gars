import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { ArrowLeft } from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';
import { fontType, colors } from '../../theme';
import axios from 'axios';

const AddBlogForm = () => {
    const dataCategory = [
        { id: 1, name: "Satisfying" },
        { id: 2, name: "Disappointing" },
    ];
    const [blogData, setBlogData] = useState({
        username: "",
        category: {},
        caption: "",
    });
    const handleChange = (key, value) => {
        setBlogData({
            ...blogData,
            [key]: value,
        });
    };
    const handleUpload = async () => {
        setLoading(true);
        try {
            await axios.post('https://6572a1e0d61ba6fcc015471c.mockapi.io/gars/post/', {
                username: blogData.username,
                category: blogData.category,
                image,
                caption: blogData.caption,
                createdAt: new Date(),
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            setLoading(false);
            navigation.navigate('Profile');
        } catch (e) {
            console.log(e);
        }
    };

    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowLeft color={colors.black()} variant="Linear" size={24} />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: "center" }}>
                    <Text style={styles.title}>Share Your Experience</Text>
                </View>
            </View>
            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 24,
                    paddingVertical: 10,
                    gap: 10,
                }}>
                <View style={textInput.borderDashed}>
                    <TextInput
                        placeholder="Username"
                        value={blogData.username}
                        onChangeText={(text) => handleChange("username", text)}
                        placeholderTextColor={colors.grey(0.6)}
                        multiline
                        style={textInput.username} />
                </View>
                <View style={[textInput.borderDashed]}>
                    <Text
                        style={{
                            fontSize: 12,
                            fontFamily: fontType["Pjs-Regular"],
                            color: colors.grey(0.6),
                        }}>
                        Category
                    </Text>
                    <View style={category.container}>
                        {dataCategory.map((item, index) => {
                            const bgColor =
                                item.id === blogData.category.id
                                    ? colors.red(0.5)
                                    : colors.red(0.12);
                            const color =
                                item.id === blogData.category.id
                                    ? colors.white()
                                    : colors.black();
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() =>
                                        handleChange("category", { id: item.id, name: item.name })}
                                    style={[category.item, { backgroundColor: bgColor }]}>
                                    <Text style={[category.name, { color: color }]}>
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
                <View style={[textInput.borderDashed]}>
                    <TextInput
                        placeholder="Image"
                        value={image}
                        onChangeText={(text) => setImage(text)}
                        placeholderTextColor={colors.grey(0.6)}
                        style={textInput.image} />
                </View>
                <View style={[textInput.borderDashed, { minHeight: 400 }]}>
                    <TextInput
                        placeholder="Caption"
                        value={blogData.caption}
                        onChangeText={(text) => handleChange("caption", text)}
                        placeholderTextColor={colors.grey(0.6)}
                        multiline
                        style={textInput.caption} />
                </View>
            </ScrollView>
            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.button} onPress={handleUpload}>
                    <Text style={styles.buttonLabel}>Upload</Text>
                </TouchableOpacity>
            </View>
            {loading && (
                <View style={styles.loadingOverlay}>
                    <ActivityIndicator size="large" color={colors.red()} />
                </View>
            )}
        </View>
    );
};

export default AddBlogForm;

const styles = StyleSheet.create({
    loadingOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: colors.black(0.4),
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: colors.white(),
    },
    header: {
        paddingHorizontal: 24,
        flexDirection: "row",
        alignItems: "center",
        height: 52,
        elevation: 8,
        paddingTop: 8,
        paddingBottom: 4,
    },
    title: {
        fontFamily: fontType["Pjs-Bold"],
        fontSize: 16,
        color: colors.black(),
    },
    bottomBar: {
        backgroundColor: colors.white(),
        alignItems: "flex-end",
        paddingHorizontal: 24,
        paddingVertical: 10,
        shadowColor: colors.black(),
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: colors.red(0.6),
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonLabel: {
        fontSize: 14,
        fontFamily: fontType["Pjs-SemiBold"],
        color: colors.white(),
    },
});
const textInput = StyleSheet.create({
    borderDashed: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        borderColor: colors.grey(0.4),
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 1,
        shadowRadius: 1,
    },
    username: {
        fontSize: 12,
        fontFamily: fontType["Pjs-SemiBold"],
        color: colors.black(),
        padding: 0,
    },
    image: {
        fontSize: 12,
        fontFamily: fontType["Pjs-Regular"],
        color: colors.black(),
        padding: 0,
    },
    caption: {
        fontSize: 12,
        fontFamily: fontType["Pjs-Regular"],
        color: colors.black(),
        padding: 0,
    },
});
const category = StyleSheet.create({
    title: {
        fontSize: 12,
        fontFamily: fontType["Pjs-Regular"],
        color: colors.grey(0.6),
    },
    container: {
        flexWrap: "wrap",
        flexDirection: "row",
        gap: 10,
        marginTop: 10,
    },
    item: {
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderRadius: 25,
    },
    name: {
        fontSize: 10,
        fontFamily: fontType["Pjs-Medium"],
    },
});