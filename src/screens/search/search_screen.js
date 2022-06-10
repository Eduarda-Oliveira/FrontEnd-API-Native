import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, KeyboardAvoidingView, Text} from 'react-native';
import { useForm } from 'react-hook-form';
import { Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FolService } from '../../services'
import KeywordMultipleSelect from '../../components/KeywordMultipleSelect';

export function Search({ navigation }) {

   const [keywords, setKeywords] = useState([]);
   const [documents, setDocuments] = useState([]);
   const { handleSubmit } = useForm()

  function onSubmit() {
    FolService.findByKeyword(keywords)
    .then((response) => {
      console.log(response)
      setDocuments(response.data)
    })
    .catch((error) => {
           console.log(error.message)
         });
  };

  function renderDocuments(){
    if(!documents){
      return null;
    }

    return(
      documents.map(document =>{
        return(
          <Text 
          style={styles.listText}
          key={document.id}>
          {document.title}
          </Text>
        )
      })
    )
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <LinearGradient
          colors={['rgba(32, 70, 219, 0.76) 60%', 'rgba(32, 129, 219, 0)']}
          style={styles.background}
      />
      <ScrollView>
        <View style={styles.container}>

          <KeywordMultipleSelect 
            value={keywords}
            onChange={value => setKeywords(value)}
          />

          <Button
          style={styles.btnSubmit}
          title="Search"
          onPress={handleSubmit(onSubmit)}
          ></Button>

        {renderDocuments()}
      
          
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
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
    top: 70,
    bottom: 0,
    justifyContent: 'center',
    width: '90%',
  },

  btnSubmit:{
    backgroundColor: '#35AAFF',
    width: '100%',
    height:45,
    alignItems: 'baseline',
    justifyContent: 'center',
    borderRadius: 7,
  },

  text: {
    position: 'relative',
    color: '#000000',
    fontSize: 18,
    marginHorizontal: 15,
    //fontWeight: 'bold',
  },

  listText: {
    fontSize: 18,
    textAlign: 'center',
  },  
 
});
