import React, {useState} from 'react';

import { StyleSheet, 
         Text,
         StatusBar,
         Image,
          View } from 'react-native';
import {styles} from './styles';
import IlustrationImg from '../../assets/illustration.png';


export  function SignIn() {
  return (
    <View style={styles.container}>
        <StatusBar
          barStyle= "light-content"
          backgroundColor= "transparent"
          translucent
        />
        <Image 
          source={IlustrationImg} 
          style = {styles.image}
          resizeMode='stretch'
        />

        <View style = {styles.content}>
          <Text style = {styles.title}>

              Organize {`\n`}
              suas Jogatinas {`\n`}
              Facilmente
              
          </Text>

          <Text style = {styles.subtitle}>

              Crie grupos para jogar seus games {`\n`}
              favoritos com seus amigos
                            
          </Text>

        </View>

    </View>
  );
}

