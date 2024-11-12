import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
  },
  subTitleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  highlight: {
    color: '#3A42FF',
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#3A42FF',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    color: '#000000',
  },
  loginButton: {
    backgroundColor: '#3A42FF',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 8,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#3A42FF',
    marginTop: 16,
    textDecorationLine: 'underline',
  },
});

export default styles;
