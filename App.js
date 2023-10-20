import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView, _View } from 'react-native';
import { fontType, colors } from './src/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <SearchBar />
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={categoryItem.categoryList}>
          <CategoryItem title={"Popular"} />
          <CategoryItem title={"New Product"} />
          <CategoryItem title={"Jersey"} />
          <CategoryItem title={"Ball"} />
          <CategoryItem title={"Jacket"} />
          <CategoryItem title={"Bag"} />
        </ScrollView>
        <ListBlog />
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
      <View style={header.containerIcon}>
        <Image source={require('./src/assets/images/iconMart.png')} style={search.searchIcon} />
      </View>
    </View>
  );
};

const SearchBar = () => {
  return (
    <View style={search.searchBarContainer}>
      <View style={search.searchBarIconContainer}>
        <Image source={require('./src/assets/images/iconSearch.png')} style={search.searchIcon} />
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

const ListBlog = () => {
  const blogData = [
    {
      title: 'Jersey Merah Anak-Anak',
      // description: 'the wayag islands, raja ampat, west papua, indonesia',
      image: require('./src/assets/images/janakmerah.png'),
      price: "Rp. 299.000",
    },
    {
      title: 'Jersey Merah Dewasa',
      // description: 'the wayag islands, raja ampat, west papua, indonesia',
      image: require('./src/assets/images/jdewasamerah.jpeg'),
      price: "Rp. 399.000",
    },
    {
      title: 'Jersey Putih Anak-Anak',
      // description: 'the wayag islands, raja ampat, west papua, indonesia',
      image: require('./src/assets/images/janakputih.png'),
      price: "Rp. 10000",
    },
    {
      title: 'Jersey Putih Dewasa',
      // description: 'the wayag islands, raja ampat, west papua, indonesia',
      image: require('./src/assets/images/jdewasaputih.jpg'),
      price: "Rp. 10000",
    },
  ];

  return (
    <ScrollView contentContainerStyle={catalog.scrollContainer} showsVerticalScrollIndicator={false}>
      {blogData.map((item, index) => (
        <View key={index} style={catalog.cardContainer}>
          <Image source={item.image} style={catalog.cardImage} />
          <Text style={catalog.cardTitle}>{item.title}</Text>
          <Text style={catalog.cardDescription}>{item.description}</Text>

          {/* Harga dan Icon Add */}
          <View style={catalog.priceContainer}>
            <Text style={catalog.cardPrice}>{item.price}</Text>
            <TouchableOpacity style={catalog.iconAddContainer}>
              <Image source={require('./src/assets/images/iconAdd.png')} style={catalog.iconAddIcon} />
            </TouchableOpacity>
          </View>

          {/* Icon Like di pojok kanan atas */}
          <TouchableOpacity style={catalog.iconLikeContainer}>
            <Image source={require('./src/assets/images/iconLike.png')} style={catalog.iconLikeIcon} />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

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

const header = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Add justifyContent property
    marginTop: 5,
    padding: 10,
    height: 90,
    // backgroundColor: 'black',
  },
  containerText: {
    // backgroundColor: 'red',
    // paddingLeft: 10,
    marginLeft: 10,
  },
  textHeader: {
    fontFamily: 'CS-BoldItalic',
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
    top: 20,
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

const categoryItem = StyleSheet.create({
  categoryList: {
    flexDirection: 'row',  // Set flexDirection to 'row'
    // backgroundColor: 'black',
    marginTop: 30,
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

