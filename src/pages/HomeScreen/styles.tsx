import {StyleSheet} from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#3926FF',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    fontFamily: theme.fonts.adLamDisplay,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerContext: {
      flex: 1,
      alignItems: 'flex-start',
  },
  greeting: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
    fontFamily: theme.fonts.adLamDisplay,
    width: 150,
  },
  subtext: {
    fontSize: 15,
    color: '#FFF',
    marginTop: 5,
    flex: 1,
    width: 100,
    fontFamily: theme.fonts.adLamDisplay,
  },
  headerImage: {
      flex: 1,
      alignItems: 'flex-end',
  },
  image: {
    width: 150,
    height: 150,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: -20,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    maxWidth: 285,
    height: 54,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: '#333',
    fontFamily: theme.fonts.adLamDisplay,
    fontSize: 14,
  },
  productList: {
    padding: 10,
  },
  productContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    margin: 10,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 120,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'transparent',
    borderRadius: 15,
    padding: 5,
    elevation: 1,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
});

export default styles;
