import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, TextInput, Image} from 'react-native';
import { Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { login_service } from '../../services/gateway_service';
export function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function login(username, password){
    await login_service.login(username, password).then((response) => {
      if (response.data.message === "user authenticated"){
        navigation.navigate('Index');
      } else {
        console.log("Usuário não encontrado, tente novamente")
      }
    }).catch((e) => {
      throw e;
    })
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(32, 70, 219, 0.76)', 'rgba(32, 129, 219, 0)']}
        style={styles.background}
        />

      <View style={styles.container}>
      <Image source={{ uri: "https://i.ibb.co/RgykfNH/bmw.jpg" }} 
          style={styles.image}/>

        <TextInput
        style={styles.input}
        placeholder="Username"
        autoCorrect={false}
        htmlFor={ username }
        onChange={ (component) => setUsername(component.target.value) }
        />

        <TextInput
        secureTextEntry
        style={styles.input}
        htmlFor={ password }
        placeholder="Password"
        autoCorrect={false}
        onChange={ (component) => setPassword(component.target.value) }
        />

        <Button
        style={styles.btnRegister}
        title="Login" 
        onPress={() => login(username,password)}
        ></Button>

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: -50,
    top: 0,
    height: '100%',
  },
 
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    gap: '2%',
  },

  image: {
    position: 'relative',
    width: 200,
    height: 200,
    borderRadius: 200,
  },

  input: {
    position: 'relative',
    backgroundColor: '#ffffff',
    width: '90%',
    marginBottom: 15,
    color: 'black',
    fontSize: 17,
    borderRadius: 15,
    padding: 10,
  },
});