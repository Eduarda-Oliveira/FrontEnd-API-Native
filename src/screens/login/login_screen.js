import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Image} from 'react-native';
import { Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function Login({ navigation }) {
  
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.container}>
          <LinearGradient
        // Background Linear Gradient
        colors={['rgba(32, 70, 219, 0.76)', 'rgba(32, 129, 219, 0)']}
        style={styles.background}
        />

        <Image source={{ uri: "https://i.ibb.co/J3ksyM9/Snowball-750x420.webp" }} 
          style={styles.image}/>

        <TextInput
        style={styles.input}
        placeholder="Username"
        autoCorrect={false}
        />

        <TextInput
        secureTextEntry
        style={styles.input}
        placeholder="Password"
        autoCorrect={false}
        />

        <Button
        style={styles.btnRegister}
        title="Login" 
        onPress={() => navigation.navigate('Index')}
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
    height: 420,
  },
 
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
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
    stroke: 'black',
    padding: 10,
  },

  btnSubmit:{
    backgroundColor: '#35AAFF',
    width: '100%',
    height:45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },

  submitText:{
    fontSize:18,
    color: '#FFF',
  },
});
