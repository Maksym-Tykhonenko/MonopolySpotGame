import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';

const Seventh = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/backgr_1.jpg')}
        style={{flex: 1}}>
        <View
          style={{
            position: 'relative',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'gold'}}>Seventh LVL</Text>

          {/**BTN Back */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('HomeScreen');
            }}
            style={{
              position: 'absolute',
              bottom: 10,
              right: 10,
              shadowColor: 'gold',
              shadowOffset: {width: 0, height: 8},
              shadowOpacity: 0.8,
              shadowRadius: 10,
              elevation: 10,
            }}>
            <Text
              style={{
                color: 'gold',
                fontFamily: 'Chewy-Regular',
                fontSize: 30,
              }}>
              Back
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Seventh;
