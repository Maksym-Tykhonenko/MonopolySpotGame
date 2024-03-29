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
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const appearingAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      const firstImageAnimation = Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      });

      const secondImageAnimation = Animated.timing(appearingAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      });

      Animated.sequence([
        Animated.delay(1000), // Затримка між анімаціями для першого зображення
        firstImageAnimation,
        Animated.delay(1000), // Затримка перед анімацією другого зображення
        secondImageAnimation,
      ]).start(() => {
        // Після завершення послідовної анімації встановлюємо прапорець louderIsLouded
        setTimeout(() => {
          setLouderIsLouded(true);
        }, 2000);
      });
    }, []);

    return (
      <View style={{position: 'relative', flex: 1}}>
        <ImageBackground
          source={require('./assets/backgr_1.jpg')}
          style={{flex: 1}}>
          <Animated.Image
            source={require('./assets/louder/loader_1.jpg')}
            style={{
              width: '100%',
              height: '100%',
              opacity: fadeAnim,
            }}
          />

          <Animated.Image
            source={require('./assets/louder/loader_2.jpg')}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              opacity: appearingAnim,
            }}
          />
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
