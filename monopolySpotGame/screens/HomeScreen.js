import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/backgr_1.jpg')}
        style={{flex: 1}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('GameScreen');
            }}
            style={{
              width: 250,
              height: 60,
              borderWidth: 3,
              borderRadius: 50,
              shadowColor: 'gold',
              shadowOffset: {width: 0, height: 8},
              shadowOpacity: 0.8,
              shadowRadius: 10,
              elevation: 10,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 40,
              borderColor: 'gold',
            }}>
            <Text
              style={{
                color: 'gold',
                fontSize: 35,
                fontWeight: 'bold',
                fontFamily: 'Chewy-Regular',
              }}>
              Game
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RulesScreen');
            }}
            style={{
              width: 250,
              height: 60,
              borderWidth: 2,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: 'gold',
              borderWidth: 3,
              borderRadius: 50,
              shadowColor: 'gold',
              shadowOffset: {width: 0, height: 8},
              shadowOpacity: 0.8,
              shadowRadius: 10,
              elevation: 10,
              marginBottom: 40,
            }}>
            <Text
              style={{
                color: 'gold',
                fontSize: 35,
                fontWeight: 'bold',
                fontFamily: 'Chewy-Regular',
              }}>
              Rules
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
//Gaegu-Bold
//Gaegu-Light
//Gaegu-Regular

//Chewy-Regular
export default HomeScreen;
