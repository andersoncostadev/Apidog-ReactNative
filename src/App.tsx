
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
  } from 'react-native';

import GetDog from './Util/ApiCall';

const App: React.FC =  () => {
  
  return (
    <View style={styles.content}>

     <StatusBar barStyle='light-content'/>

    <View style={styles.headers}> 
        <Text style={styles.title}>Encontre seu Dog</Text>
     </View>
      <ScrollView
        style={styles.scrollStyle}
        contentInsetAdjustmentBehavior="automatic" >
       <GetDog/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'black'
  },
  headers: {
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'black',
    height: 100
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF'
  },
  scrollStyle: {
    height: Dimensions.get('screen').height,
    backgroundColor: '#fff'
  },
})


export default App;
