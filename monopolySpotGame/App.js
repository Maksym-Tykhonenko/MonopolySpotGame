import React, {useState, useRef, useEffect} from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import RulesScreen from './screens/RulesScreen';
import GameScreen from './screens/GameScreen';
import First from './screens/1lvl';
import Second from './screens/2lvl';
import Third from './screens/3lvl';
import Fourth from './screens/4lvl';
import Fifth from './screens/5lvl';
import Sixth from './screens/6lvl';
import Seventh from './screens/7lvl';
import Eighth from './screens/8lvl';
import Ninth from './screens/9lvl';
import Tenth from './screens/10lvl';

const Stack = createNativeStackNavigator();

const App = () => {
  const [louderIsLouded, setLouderIsLouded] = useState(false);
  const Louder = props => {
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const appearingAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      }).start();
    }, []);

    useEffect(() => {
      Animated.timing(appearingAnim, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }).start();

      setTimeout(() => {
        setLouderIsLouded(true);
      }, 8000);
    }, []);

    return (
      <View style={{position: 'relative', flex: 1}}>
        <ImageBackground
          source={require('./assets/backgr_1.jpg')}
          style={{flex: 1}}>
          <Animated.View
            style={{
              position: 'absolute',
              top: '40%',
              left: '40%',
              transform: [
                {translateX: -100}, // Adjust these values based on your text size
                {translateY: -25},
              ],
              opacity: appearingAnim,
            }}>
            <Animated.View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: -60,
                marginLeft: 40,
              }}>
              <Animated.Text
                style={{
                  color: 'gold',
                  fontFamily: 'Chewy-Regular',
                  fontSize: 100,
                  shadowColor: 'gold',
                  shadowOffset: {width: 0, height: 8},
                  shadowOpacity: 0.8,
                  shadowRadius: 10,
                  elevation: 10,
                }}>
                Let's
              </Animated.Text>
              <Animated.Text
                style={{
                  color: 'gold',
                  fontFamily: 'Chewy-Regular',
                  fontSize: 100,
                  shadowColor: 'gold',
                  shadowOffset: {width: 0, height: 8},
                  shadowOpacity: 0.8,
                  shadowRadius: 10,
                  elevation: 10,
                }}>
                play
              </Animated.Text>
            </Animated.View>
          </Animated.View>
        </ImageBackground>
      </View>
    );
  };

  return (
    <NavigationContainer>
      {!louderIsLouded ? (
        <Louder />
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RulesScreen"
            component={RulesScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="GameScreen"
            component={GameScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="First"
            component={First}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Second"
            component={Second}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Third"
            component={Third}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Fourth"
            component={Fourth}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Fifth"
            component={Fifth}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Sixth"
            component={Sixth}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Seventh"
            component={Seventh}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Eighth"
            component={Eighth}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Ninth"
            component={Ninth}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Tenth"
            component={Tenth}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
