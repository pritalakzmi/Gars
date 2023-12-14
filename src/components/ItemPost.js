import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {fontType, colors} from '../theme';

const ItemPost = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cardItem}
      onPress={() => navigation.navigate('BlogPost', {blogId: item.id})}
      >
      <FastImage
        style={styles.cardImage}
        source={{
          uri: item?.image,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.cardContent}>
        <View
          style={{
            flexDirection: 'row',
            gap: 30,
          }}>
          <View style={{gap: 5, flex: 1}}>
            <Text style={styles.cardTitle}>{item?.username}</Text>
            <Text style={styles.cardCategory}>{item.category?.name}</Text>
            <Text style={styles.cardCaption}>{item?.caption}</Text>
          </View>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardText}>{item?.totalComments}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemPost;

const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    gap: 15,
  },
  cardItem: {
    backgroundColor: colors.blue(0.02),
    flexDirection: 'column',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.blue(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardCaption: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.6),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.6),
  },
  cardImage: {
    width: 360,
    height: 300,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});