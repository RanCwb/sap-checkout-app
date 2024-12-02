import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const homeLogo = require('../../assets/images/home-logo.png');
const LoginScreen = () => {


  const navigation = useNavigation<any>();


  function navigateToHome() {
    navigation.navigate("HomeScreen");
  }

  return (
    <View style={styles.container}>
      <Image
        source={homeLogo}
        style={styles.image}
      />
      <Text style={styles.welcomeText}>Welcome!</Text>
      <Text style={styles.subTitleText}>To <Text style={styles.highlight}>Sap Checkout!</Text></Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#A0A0A0"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#A0A0A0"
          secureTextEntry
          style={styles.input}
        />
      </View>

      <TouchableOpacity onPress={navigateToHome} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>I forgot my password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
