import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, _View, TouchableOpacity } from 'react-native';
import { fontType, colors } from '../../theme';
import { ListBlog } from '../../components';

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Header />
        <SearchBar />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={categoryItem.categoryList}>
          <TouchableOpacity>
            <CategoryItem title={"Popular"} />
          </TouchableOpacity>
          <TouchableOpacity>
            <CategoryItem title={"New Product"} />
          </TouchableOpacity>
          <TouchableOpacity>
            <CategoryItem title={"Promo"} />
          </TouchableOpacity>
          <TouchableOpacity>
            <CategoryItem title={"Merchandise"} />
          </TouchableOpacity>
          <TouchableOpacity>
            <CategoryItem title={"Jersey"} />
          </TouchableOpacity>
        </ScrollView>
        {/* <ListBlog /> */}
        <ListBlog data={blogData} />
      </ScrollView>
    </View >
  );
}

const Header = () => {
  return (
    <View style={header.containerHeader}>
      <View style={header.containerText}>
        <Text style={header.textHeader}>Gars</Text>
      </View>
      <TouchableOpacity style={header.containerIcon}>
      <Image source={require('../../assets/images/iconNotification.png')} style={notification.notificationIcon} />
      </TouchableOpacity>
    </View>
  );
};

const SearchBar = () => {
  return (
    <View style={search.searchBarContainer}>
      <View style={search.searchBarIconContainer}>
        <Image source={require('../../assets/images/iconSearch.png')} style={search.searchIcon} />
      </View>
      <TextInput
        style={search.searchInput}
        placeholder="Search"
        placeholderTextColor="grey"
      />
    </View>
  );
};

const CategoryItem = ({ title }) => {
  return (
    <View style={categoryItem.categoryItem}>
      <Text style={categoryItem.categoryTitle}>{title}</Text>
    </View>
  );
};

// const ListBlog = () => {
const blogData = [
  {
    id:1,
    title: 'Jersey Merah Anak-Anak',
    // description: '',
    image: require('../../assets/images/janakmerah.png'),
    price: "Rp. 299.000",
  },
  {
    id:2,
    title: 'Jersey Merah Dewasa',
    // description: '',
    image: require('../../assets/images/jdewasamerah.jpeg'),
    price: "Rp. 399.000",
  },
  {
    id:3,
    title: 'Jersey Putih Anak-Anak',
    // description: '',
    image: require('../../assets/images/janakputih.png'),
    price: "Rp. 299.000",
  },
  {
    id:4,
    title: 'Jersey Putih Dewasa',
    // description: '',
    image: require('../../assets/images/jdewasaputih.jpg'),
    price: "Rp. 299.000",
  },
];

//   return (
//     <ScrollView contentContainerStyle={catalog.scrollContainer} showsVerticalScrollIndicator={false}>
//       {blogData.map((item, index) => (
//         <View key={index} style={catalog.cardContainer}>
//           <Image source={item.image} style={catalog.cardImage} />
//           <Text style={catalog.cardTitle}>{item.title}</Text>
//           <Text style={catalog.cardDescription}>{item.description}</Text>

//           {/* Harga dan Icon Add */}
//           <View style={catalog.priceContainer}>
//             <Text style={catalog.cardPrice}>{item.price}</Text>
//             <TouchableOpacity style={catalog.iconAddContainer}>
//               <Image source={require('./src/assets/images/iconAdd.png')} style={catalog.iconAddIcon} />
//             </TouchableOpacity>
//           </View>

//           {/* Icon Like di pojok kanan atas */}
//           <TouchableOpacity style={catalog.iconLikeContainer}>
//             <Image source={require('./src/assets/images/iconLike.png')} style={catalog.iconLikeIcon} />
//           </TouchableOpacity>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const header = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginTop: 5,
    padding: 10,
    height: 90,
  },
  containerText: {
    marginLeft: 20,
  },
  textHeader: {
    fontFamily: fontType['Pjs-ExtraBold'],
    fontSize: 32,
    color: colors.red,
  },
  containerIcon: {
    alignItems: 'flex-end',
    marginRight: 20,
  }
});

const search = StyleSheet.create({
  searchBarContainer: {
    top: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D8D9DA',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 35, // Adjust the padding for icon alignment
  },
  searchIconContainer: {
    marginLeft: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'grey',
    padding: 10,
  },
});

const notification = StyleSheet.create({
  notificationBarContainer: {
    top: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D8D9DA',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 35, // Adjust the padding for icon alignment
  },
  notificationIconContainer: {
    marginLeft: 20,
  },
  notificationIcon: {
    width: 20,
    height: 20,
  },
});

const categoryItem = StyleSheet.create({
  categoryList: {
    flexDirection: 'row', 
    marginTop: 0,
    padding: 10,
    maxHeight: 90,
  },
  categoryItem: {
    padding: 10,
    margin: 10,
    paddingRight: -5,
  },
  categoryTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: fontType['CS-Book'],
    color: 'grey',
  },
});

const CardCatalog = StyleSheet.create({
  scrollContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  cardContainer: {
    maxWidth: 300,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 12,
    right: 12,
    zIndex: 1,
  },
  cardBody: {
    padding: 16,
  },
  cardTitle: {
    color: 'black', // Ganti dengan warna yang sesuai
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardPrice: {
    color: 'black', // Ganti dengan warna yang sesuai
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  catalogImage: {
    width: '100%', // Sesuaikan dengan kebutuhan
    height: 150, // Sesuaikan dengan kebutuhan
    resizeMode: 'cover',
    borderRadius: 8,
  },
  iconLike: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
});

