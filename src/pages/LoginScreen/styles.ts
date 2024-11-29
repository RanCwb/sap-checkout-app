import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  image: {
    width: 312,
    height: 234,
    marginBottom: 8,
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: theme.fonts.adLamDisplay,
    marginBottom: 20,
  },
  subTitleText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: theme.fonts.adLamDisplay,
  },
  highlight: {
    color: '#3A42FF',
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 61,
  },
  input: {
    height: 63,
    borderWidth: 1,
    borderColor: '#3A42FF',
    borderRadius: 8,
    padding: 12,
    marginBottom: 25,
    fontSize: 15,
    fontFamily: theme.fonts.adLamDisplay,
    fontWeight: 'bold',
    color: '#000000',
  },
  loginButton: {
    backgroundColor: '#3A42FF',
    paddingHorizontal: 80,
    borderRadius: 35,
    marginTop: 20,
    maxWidth: 230,
    height: 63,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: theme.fonts.adLamDisplay,

  },
  forgotPasswordText: {
    color: '#3A42FF',
    marginTop: 35,
    textDecorationLine: 'none',
    fontFamily: theme.fonts.adLamDisplay,
  },
});

export default styles;
