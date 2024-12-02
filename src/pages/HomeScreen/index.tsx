import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

// Dados de exemplo
const products = [
  {
    id: '1',
    title: 'Product 1',
    image: require('../../assets/images/plants.jpg'), // Substitua pela URL local
  },
  {
    id: '2',
    title: 'Product 2',
    image: require('../../assets/images/notebooks.jpg'), // Substitua pela URL local
  },
  {
    id: '3',
    title: 'Product 3',
    image: require('../../assets/images/plants.jpg'), // Substitua pela URL local
  },
  {
    id: '4',
    title: 'Product 3',
    image: require('../../assets/images/shower.jpg'), // Substitua pela URL local
  },
  {
    id: '5',
    title: 'Product 3',
    image: require('../../assets/images/shower.jpg'), // Substitua pela URL local
  },
  {
    id: '6',
    title: 'Product 2',
    image: require('../../assets/images/notebooks.jpg'), // Substitua pela URL local
  },
];

const HomeScreen = () => {
  const [favoriteProducts, setFavoriteProducts] = React.useState<string[]>([]);

  // Função para alternar o estado de favorito
  const toggleFavorite = (productId: string) => {
    setFavoriteProducts(
      prevFavorites =>
        prevFavorites.includes(productId)
          ? prevFavorites.filter(id => id !== productId) // Remove dos favoritos
          : [...prevFavorites, productId], // Adiciona aos favoritos
    );
  };

  // Renderiza um produto
  const renderProduct = ({item}: any) => (
    <View style={styles.productContainer}>
      <Image source={item.image} style={styles.productImage} />
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => toggleFavorite(item.id)}>
        <Icon
          name={
            favoriteProducts.includes(item.id) ? 'favorite' : 'favorite-border'
          }
          size={15}
          color="#FFF"
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContext}>
          <Text style={styles.greeting}>Hi, Ranathan!</Text>
          <Text style={styles.subtext}>
            Place your order quickly and easily.
          </Text>
        </View>
        <View style={styles.headerImage}>
          <Image
            source={require('../../assets/images/brazuca.png')}
            style={styles.image}
          />
        </View>
      </View>

      {/* Barra de busca */}
      <View style={styles.searchBar}>
        <Icon name="search" size={30} color="#3926FF" />
        <TextInput
          placeholder="Search Products"
          style={styles.searchInput}
          placeholderTextColor="#6666666c"
        />
      </View>

      {/* Lista de produtos */}
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={renderProduct}
        horizontal={false}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />

      {/* Barra de navegação inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Icon name="home" size={30} color="#3926FF" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="store" size={30} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="shopping-cart" size={30} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="person" size={30} color="#666" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
