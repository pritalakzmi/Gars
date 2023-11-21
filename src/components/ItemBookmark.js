import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Receipt21, Clock, Message} from 'iconsax-react-native';
import FastImage from 'react-native-fast-image';
import {fontType, colors} from '../theme';
import {useNavigation} from '@react-navigation/native';

const navigation = useNavigation();
const truncateTextByWords = (text, maxWords) => {
  const words = text.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + ' ...';
  }
  return text;
};

const ItemBookmark = ({item, onPress, variant, isSideBySide}) => {
  return (
    <TouchableOpacity
      style={styles.cardItem}
      onPress={() => navigation.navigate('BlogDetail', {blogId: item.id})}>
      <FastImage
        style={styles.cardImage}
        source={{
          uri: item.image,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}>
        <View style={styles.cardContent}>
          <View style={styles.cardCategory}>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryLabel}>{item.category}</Text>
            </View>
          </View>
          <View>
            <View style={styles.cardIcon}>
              <TouchableOpacity onPress={onPress}>
                <Receipt21 color={colors.white()} variant={variant} size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </FastImage>
      <View style={isSideBySide ? styles.textContainerSideBySide : styles.textContainer}>
        <Text style={styles.blogTitle}>{item.title}</Text>
        <Text style={styles.blogContent}>
          {truncateTextByWords(item.content, 10)}
        </Text>
        <View style={styles.cardInfo}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Clock size={12} variant="Linear" color={colors.grey(0.6)} />
            <Text style={styles.cardText}>{item.createdAt}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Message size={12} variant="Linear" color={colors.grey(0.6)} />
            <Text style={styles.cardText}>{item.totalComments}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemBookmark;

const styles = StyleSheet.create({
  cardItem: {
    backgroundColor: colors.black(0.03),
    borderRadius: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  cardImage: {
    width: '50%',
    height: 100,
    borderRadius: 15,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  textContainer: {
    flex: 1,
    padding: 10,
  },
  textContainerSideBySide: {
    flex: 1,
    padding: 20,
    marginTop: 50, // Menambah margin atas untuk blog content agar berada di bawah image
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  blogTitle: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    marginBottom: 5,
  },
  blogContent: {
    fontSize: 10,
    lineHeight: 20,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(),
    marginBottom: 5,
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.6),
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
  cardCategory: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '60'
  },
});