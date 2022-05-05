import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, 
  TouchableOpacity, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
//import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
//import { SafeAreaView } from 'react-native-safe-area-context';

export function Index({ navigation }) {

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

          <Text style={styles.text}>
            Username
          </Text>

          <View style={styles.space}>
          <TouchableOpacity onPress={() => alert ('Hello World!')} style={styles.button}>
            <Text style={styles.buttonText}> 
            Ferrari
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => alert ('Hello World!')} style={styles.button}>
            <Text style={styles.buttonText}> 
            Mercedes
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => alert ('Hello World!')} style={styles.button}>
            <Text style={styles.buttonText}> 
            BMW
            </Text>
          </TouchableOpacity>
          </View>
        
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
  
      space: {
        flex: 2,
        justifyContent: "space-between",
        flexDirection: "column-reverse",
      },

      image: {
        position: 'relative',
        width: 200,
        height: 200,
        borderRadius: 200,
      },

      text: {
        position: 'relative',
        color: '#000000',
        fontSize: 18,
        marginHorizontal: 15,
        //fontWeight: 'bold',
      },

      button: {
        position: 'relative',
        backgroundColor: "blue",
        padding: 20,
        borderRadius: 5,  
        height: 50,
        width: 150,     
      },
      
      buttonText: {
        textAlign: 'center',
        fontSize: 20,
        color: "white",
      },
    });
    