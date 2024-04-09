import React, {useState, useRef, useEffect} from 'react';
import {
  ImageBackground,
  View,
  Animated,
  SafeAreaView,
  Text,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReactNativeIdfaAaid, {
  AdvertisingInfoResponse,
} from '@sparkfabrik/react-native-idfa-aaid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LogLevel, OneSignal} from 'react-native-onesignal';

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
import WVScreen from './screens/WVScren';

const Stack = createNativeStackNavigator();

const App = () => {
  const [route, setRoute] = useState();

  // 41eb18ff-cc89-45ab-b532-c804bc97585a

  ///////////// Отримання IDFA
  const [idfa, setIdfa] = useState(null);
  console.log('idfa==>', idfa);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [idfa]);

  const setData = async () => {
    try {
      const data = {
        idfa,
      };
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem('App', jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('App');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('Дані дістаються в AsyncStorage');
        console.log('parsedData in App==>', parsedData);
        setIdfa(parsedData.idfa);
      } else {
        await fetchIdfa();
        await someFunction();
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const fetchIdfa = async () => {
    try {
      const res = await ReactNativeIdfaAaid.getAdvertisingInfo();
      if (!res.isAdTrackingLimited) {
        setIdfa(res.id);
      } else {
        setIdfa(true);
      }
    } catch (err) {
      console.log('err', err);
      setIdfa(null);
      fetchIdfa(); //???
    }
  };

  //OneSignall
  const requestPermission = () => {
    return new Promise((resolve, reject) => {
      try {
        OneSignal.Notifications.requestPermission(true);
        resolve(); // Викликаємо resolve(), оскільки OneSignal.Notifications.requestPermission не повертає проміс
      } catch (error) {
        reject(error); // Викликаємо reject() у разі помилки
      }
    });
  };

  // Виклик асинхронної функції requestPermission() з використанням async/await
  const someFunction = async () => {
    try {
      await requestPermission();
      // Якщо все Ok
    } catch (error) {
      console.log('err в someFunction==> ', error);
    }
  };

  // Remove this method to stop OneSignal Debugging
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);

  // OneSignal Initialization
  OneSignal.initialize('41eb18ff-cc89-45ab-b532-c804bc97585a');

  OneSignal.Notifications.addEventListener('click', event => {
    console.log('OneSignal: notification clicked:', event);
  });
  //Add Data Tags
  OneSignal.User.addTag('key', 'value');

  ////////// Routes
  const Routes = ({isFatch}) => {
    console.log('isFatch==>', isFatch);
    if (isFatch) {
      return (
        <Stack.Navigator>
          <Stack.Screen
            name="WVScreen"
            initialParams={{idfa: idfa}}
            component={WVScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      );
    }
    return (
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
    );
  };
  ////// Louder
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
  // https://reactnative.dev/
  //
  //////////// useEffect що виріш який шлях включати
  useEffect(() => {
    const checkUrl = `https://terrific-glorious-delight.space/34P66V7N`;
    const targetData = new Date('2024-04-11T12:00:00'); //дата з якої поч працювати prod
    const currentData = new Date(); //текущая дата

    if (currentData <= targetData) {
      setRoute(false);
    } else {
      fetch(checkUrl)
        .then(r => {
          if (r.status === 200) {
            setRoute(true);
          } else {
            setRoute(false);
          }
        })
        .catch(e => {
          console.log('errar', e);
          setRoute(false);
        });
    }
  }, []);

  return (
    <NavigationContainer>
      {!louderIsLouded ? <Louder /> : <Routes isFatch={route} />}
    </NavigationContainer>
  );
};

export default App;
