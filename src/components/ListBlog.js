import React, { useState } from 'react';
import { ScrollView, StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import { fontType, colors } from '../theme';
import { useNavigation } from '@react-navigation/native';

const ListBlog = ({ data }) => {
  const navigation = useNavigation();
  const [likes, setLikes] = useState(Array(data.length).fill(false));

  const handleLikePress = (index) => {
    const newLikes = [...likes];
    newLikes[index] = !newLikes[index];
    setLikes(newLikes);
  };

  return (
    <ScrollView contentContainerStyle={catalog.scrollContainer} showsVerticalScrollIndicator={false}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={catalog.cardContainer}
          onPress={() => navigation.navigate('Product', { blogId: item.id })}>
          {/* Konten cardContainer */}
          <View>
            <Image source={item.image} style={catalog.cardImage} />
            <Text style={catalog.cardTitle}>{item.title}</Text>
            <Text style={catalog.cardDescription}>{item.description}</Text>

            {/* Harga dan Icon Add */}
            <View style={catalog.priceContainer}>
              <Text style={catalog.cardPrice}>{item.price}</Text>
              <TouchableOpacity
                style={catalog.iconAddContainer}
                onPress={() => {
                  // Handle add button press
                }}>
                <Image source={require('../assets/images/iconAdd.png')} style={catalog.iconAddIcon} />
              </TouchableOpacity>
            </View>

            {/* Icon Like di pojok kanan atas */}
            <TouchableOpacity
              style={catalog.iconLikeContainer}
              onPress={() => handleLikePress(index)}>
              <Image
                source={
                  likes[index]
                    ? require('../assets/images/iconLikeFilled.png')
                    : require('../assets/images/iconLike.png')
                }
                style={catalog.iconLikeIcon} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

};

const catalog = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  cardContainer: {
    flexBasis: '48%',
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    position: 'relative',
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontFamily: 'CS-Book',
    fontWeight: 'bold',
    color: 'black',
    padding: 10,
  },
  cardDescription: {
    fontSize: 14,
    fontFamily: 'CS-Book',
    color: 'grey',
    padding: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 8,
  },
  cardPrice: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconAddContainer: {
    marginLeft: 5, // Ruang sedikit di antara harga dan ikon
  },
  iconAddIcon: {
    width: 20,
    height: 20,
  },
  iconLikeContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  iconLikeIcon: {
    width: 20,
    height: 20,
  },
});

export default ListBlog;
