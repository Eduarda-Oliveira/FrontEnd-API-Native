import React from 'react';
import { StyleSheet, View } from 'react-native';
import PDFReader from 'rn-pdf-reader-js';
import { Constants } from 'expo';

export function Pdf({ navigation }) {
    return (
      <View style={styles.pdf}>
        <PDFReader
          source={{ uri: "http://www.africau.edu/images/default/sample.pdf" }}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    pdf: {
        width: '100%',
        height: '100%',
    }
});
