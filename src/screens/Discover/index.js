import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { BlogOrder } from '../../../data';
import { ItemSmall } from '../../components';
import { SearchNormal1 } from 'iconsax-react-native';
import { fontType, colors } from '../../theme';

// const data = [
//   {id: 1, label: 'react'},
//   {id: 2, label: 'wwdc'},
//   {id: 3, label: 'best sneaker'},
//   {id: 4, label: 'setup pc'},
//   {id: 5, label: 'car'},
// ];

// const ItemRecent = ({item}) => {
//   return (
//     <View style={recent.button}>
//       <Text style={recent.label}>{item.label}</Text>
//     </View>
//   );
// };
// const FlatListRecent = () => {
//   const renderItem = ({item}) => {
//     return <ItemRecent item={item} />;
//   };
//   return (
//     <FlatList
//       data={data}
//       keyExtractor={item => item.id}
//       renderItem={item => renderItem({...item})}
//       ItemSeparatorComponent={() => <View style={{width: 10}} />}
//       contentContainerStyle={{paddingHorizontal: 24, paddingVertical: 10}}
//       horizontal
//       showsHorizontalScrollIndicator={false}
//     />
//   );
// };
const Discover = () => {
  const recentBlog = BlogOrder.slice(5);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={recent.text}>My Order</Text>
      </View>
      <View>
        {/* <Text style={recent.text}>My Order</Text> */}
        {/* <FlatListRecent /> */}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.listCard}>
          {recentBlog.map((item, index) => (
            <ItemSmall item={item} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
export default Discover;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 25,
    gap: 30,
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 10,
    // paddingBottom: ,
  },
  bar: {
    flexDirection: 'row',
    padding: 10,
    gap: 10,
    alignItems: 'center',
    backgroundColor: colors.grey(0.05),
    borderRadius: 10,
    flex: 1,
  },
  placeholder: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.5),
    lineHeight: 18,
  },
});
const recent = StyleSheet.create({
  text: {
    fontSize: 25,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.red(0.9),
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});