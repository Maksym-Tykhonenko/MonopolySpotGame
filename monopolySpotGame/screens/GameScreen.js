import React, {useState, useEffect} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GameScreen = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const [anlock2Lvl, setAnlock2Lvl] = useState(false);
  const [anlock3Lvl, setAnlock3Lvl] = useState(false);
  const [anlock4Lvl, setAnlock4Lvl] = useState(false);
  const [anlock5Lvl, setAnlock5Lvl] = useState(false);
  const [anlock6Lvl, setAnlock6Lvl] = useState(false);
  const [anlock7Lvl, setAnlock7Lvl] = useState(false);
  const [anlock8Lvl, setAnlock8Lvl] = useState(false);
  const [anlock9Lvl, setAnlock9Lvl] = useState(false);
  const [anlock10Lvl, setAnlock10Lvl] = useState(false);

  useEffect(() => {
    getDataAbout2Lvl();
    getDataAbout3Lvl();
    getDataAbout4Lvl();
    getDataAbout5Lvl();
    getDataAbout6Lvl();
    getDataAbout7Lvl();
    getDataAbout8Lvl();
    getDataAbout9Lvl();
    getDataAbout10Lvl();
  }, []);

  const getDataAbout2Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('First');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setAnlock2Lvl(parsedData.anlock2Lvl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const getDataAbout3Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('Second');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setAnlock3Lvl(parsedData.anlock3Lvl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const getDataAbout4Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('Third');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setAnlock4Lvl(parsedData.anlock4Lvl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const getDataAbout5Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('Fourth');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setAnlock5Lvl(parsedData.anlock5Lvl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const getDataAbout6Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('Fifth');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setAnlock6Lvl(parsedData.anlock6Lvl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const getDataAbout7Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('Sixth');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setAnlock7Lvl(parsedData.anlock7Lvl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const getDataAbout8Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('Seventh');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setAnlock8Lvl(parsedData.anlock8Lvl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const getDataAbout9Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('Eighth');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setAnlock9Lvl(parsedData.anlock9Lvl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const getDataAbout10Lvl = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('Ninth');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setAnlock10Lvl(parsedData.anlock10Lvl);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

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
          <View style={{marginTop: 50}}>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  color: 'gold',
                  fontFamily: 'Chewy-Regular',
                  fontSize: 40,
                  shadowColor: 'gold',
                  shadowOffset: {width: 0, height: 8},
                  shadowOpacity: 0.8,
                  shadowRadius: 10,
                  elevation: 10,
                }}>
                Spot monopoly!
              </Text>
            </View>

            <ScrollView>
              {/**1 lvl */}
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('First');
                }}
                style={{position: 'relative', marginBottom: 20}}>
                <Image
                  source={require('../assets/levelImgs/1.jpg')}
                  style={{
                    width: windowWidth * 0.8,
                    height: 200,
                    borderRadius: 20,
                    borderColor: 'gold',
                    borderWidth: 3,
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    width: windowWidth * 0.8 - 6,
                    backgroundColor: 'rgba(128, 128, 128, 0.6)',
                    padding: 5,
                    bottom: 0,
                    alignItems: 'center',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    marginBottom: 3,
                    marginLeft: 3,
                  }}>
                  <Text
                    style={{
                      color: 'gold',
                      fontFamily: 'Chewy-Regular',
                      fontSize: 25,
                      shadowColor: 'gold',
                      shadowOffset: {width: 0, height: 8},
                      shadowOpacity: 0.8,
                      shadowRadius: 10,
                      elevation: 10,
                    }}>
                    First level
                  </Text>
                </View>
              </TouchableOpacity>

              {/**2 lvl */}
              <TouchableOpacity
                disabled={anlock2Lvl ? false : true}
                onPress={() => {
                  navigation.navigate('Second');
                }}
                style={{position: 'relative', marginBottom: 20}}>
                <Image
                  source={require('../assets/levelImgs/2.jpg')}
                  style={{
                    width: windowWidth * 0.8,
                    height: 200,
                    borderRadius: 20,
                    borderColor: anlock2Lvl
                      ? 'gold'
                      : 'rgba(128, 128, 128, 0.6)',
                    borderWidth: 3,
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    width: windowWidth * 0.8 - 6,
                    backgroundColor: 'rgba(128, 128, 128, 0.6)',
                    padding: 5,
                    bottom: 0,
                    alignItems: 'center',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    marginBottom: 3,
                    marginLeft: 3,
                  }}>
                  <Text
                    style={{
                      color: anlock2Lvl ? 'gold' : '#000',
                      fontFamily: 'Chewy-Regular',
                      fontSize: 25,
                      shadowColor: 'gold',
                      shadowOffset: {width: 0, height: 8},
                      shadowOpacity: 0.8,
                      shadowRadius: 10,
                      elevation: 10,
                    }}>
                    Second level
                  </Text>
                </View>
              </TouchableOpacity>

              {/**3 lvl */}
              <TouchableOpacity
                disabled={anlock3Lvl ? false : true}
                onPress={() => {
                  navigation.navigate('Third');
                }}
                style={{position: 'relative', marginBottom: 20}}>
                <Image
                  source={require('../assets/levelImgs/3.jpg')}
                  style={{
                    width: windowWidth * 0.8,
                    height: 200,
                    borderRadius: 20,
                    borderColor: anlock3Lvl
                      ? 'gold'
                      : 'rgba(128, 128, 128, 0.6)',
                    borderWidth: 3,
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    width: windowWidth * 0.8 - 6,
                    backgroundColor: 'rgba(128, 128, 128, 0.6)',
                    padding: 5,
                    bottom: 0,
                    alignItems: 'center',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    marginBottom: 3,
                    marginLeft: 3,
                  }}>
                  <Text
                    style={{
                      shadowColor: 'gold',
                      shadowOffset: {width: 0, height: 8},
                      shadowOpacity: 0.8,
                      shadowRadius: 10,
                      elevation: 10,
                      color: anlock3Lvl ? 'gold' : '#000',
                      fontFamily: 'Chewy-Regular',
                      fontSize: 25,
                    }}>
                    Third level
                  </Text>
                </View>
              </TouchableOpacity>

              {/**4 lvl */}
              <TouchableOpacity
                disabled={anlock4Lvl ? false : true}
                onPress={() => {
                  navigation.navigate('Fourth');
                }}
                style={{position: 'relative', marginBottom: 20}}>
                <Image
                  source={require('../assets/levelImgs/4.jpg')}
                  style={{
                    width: windowWidth * 0.8,
                    height: 200,
                    borderRadius: 20,
                    borderColor: anlock4Lvl
                      ? 'gold'
                      : 'rgba(128, 128, 128, 0.6)',
                    borderWidth: 3,
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    width: windowWidth * 0.8 - 6,
                    backgroundColor: 'rgba(128, 128, 128, 0.6)',
                    padding: 5,
                    bottom: 0,
                    alignItems: 'center',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    marginBottom: 3,
                    marginLeft: 3,
                  }}>
                  <Text
                    style={{
                      shadowColor: 'gold',
                      shadowOffset: {width: 0, height: 8},
                      shadowOpacity: 0.8,
                      shadowRadius: 10,
                      elevation: 10,
                      color: anlock4Lvl ? 'gold' : '#000',
                      fontFamily: 'Chewy-Regular',
                      fontSize: 25,
                    }}>
                    Fourth level
                  </Text>
                </View>
              </TouchableOpacity>

              {/**5 lvl */}
              <TouchableOpacity
                disabled={anlock5Lvl ? false : true}
                onPress={() => {
                  navigation.navigate('Fifth');
                }}
                style={{position: 'relative', marginBottom: 20}}>
                <Image
                  source={require('../assets/levelImgs/5.jpg')}
                  style={{
                    width: windowWidth * 0.8,
                    height: 200,
                    borderRadius: 20,
                    borderColor: anlock5Lvl
                      ? 'gold'
                      : 'rgba(128, 128, 128, 0.6)',
                    borderWidth: 3,
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    width: windowWidth * 0.8 - 6,
                    backgroundColor: 'rgba(128, 128, 128, 0.6)',
                    padding: 5,
                    bottom: 0,
                    alignItems: 'center',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    marginBottom: 3,
                    marginLeft: 3,
                  }}>
                  <Text
                    style={{
                      shadowColor: 'gold',
                      shadowOffset: {width: 0, height: 8},
                      shadowOpacity: 0.8,
                      shadowRadius: 10,
                      elevation: 10,
                      color: anlock5Lvl ? 'gold' : '#000',
                      fontFamily: 'Chewy-Regular',
                      fontSize: 25,
                    }}>
                    Fifth level
                  </Text>
                </View>
              </TouchableOpacity>

              {/**6 lvl */}
              <TouchableOpacity
                disabled={anlock6Lvl ? false : true}
                onPress={() => {
                  navigation.navigate('Sixth');
                }}
                style={{position: 'relative', marginBottom: 20}}>
                <Image
                  source={require('../assets/levelImgs/6.jpg')}
                  style={{
                    width: windowWidth * 0.8,
                    height: 200,
                    borderRadius: 20,
                    borderColor: anlock6Lvl
                      ? 'gold'
                      : 'rgba(128, 128, 128, 0.6)',
                    borderWidth: 3,
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    width: windowWidth * 0.8 - 6,
                    backgroundColor: 'rgba(128, 128, 128, 0.6)',
                    padding: 5,
                    bottom: 0,
                    alignItems: 'center',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    marginBottom: 3,
                    marginLeft: 3,
                  }}>
                  <Text
                    style={{
                      shadowColor: 'gold',
                      shadowOffset: {width: 0, height: 8},
                      shadowOpacity: 0.8,
                      shadowRadius: 10,
                      elevation: 10,
                      color: anlock6Lvl ? 'gold' : '#000',
                      fontFamily: 'Chewy-Regular',
                      fontSize: 25,
                    }}>
                    Sixth level
                  </Text>
                </View>
              </TouchableOpacity>

              {/**7 lvl */}
              <TouchableOpacity
                disabled={anlock7Lvl ? false : true}
                onPress={() => {
                  navigation.navigate('Seventh');
                }}
                style={{position: 'relative', marginBottom: 20}}>
                <Image
                  source={require('../assets/levelImgs/7.jpg')}
                  style={{
                    width: windowWidth * 0.8,
                    height: 200,
                    borderRadius: 20,
                    borderColor: anlock7Lvl
                      ? 'gold'
                      : 'rgba(128, 128, 128, 0.6)',
                    borderWidth: 3,
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    width: windowWidth * 0.8 - 6,
                    backgroundColor: 'rgba(128, 128, 128, 0.6)',
                    padding: 5,
                    bottom: 0,
                    alignItems: 'center',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    marginBottom: 3,
                    marginLeft: 3,
                  }}>
                  <Text
                    style={{
                      shadowColor: 'gold',
                      shadowOffset: {width: 0, height: 8},
                      shadowOpacity: 0.8,
                      shadowRadius: 10,
                      elevation: 10,
                      color: anlock7Lvl ? 'gold' : '#000',
                      fontFamily: 'Chewy-Regular',
                      fontSize: 25,
                    }}>
                    Seventh level
                  </Text>
                </View>
              </TouchableOpacity>

              {/**8 lvl */}
              <TouchableOpacity
                disabled={anlock8Lvl ? false : true}
                onPress={() => {
                  navigation.navigate('Eighth');
                }}
                style={{position: 'relative', marginBottom: 20}}>
                <Image
                  source={require('../assets/levelImgs/8.jpg')}
                  style={{
                    width: windowWidth * 0.8,
                    height: 200,
                    borderRadius: 20,
                    borderColor: anlock8Lvl
                      ? 'gold'
                      : 'rgba(128, 128, 128, 0.6)',
                    borderWidth: 3,
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    width: windowWidth * 0.8 - 6,
                    backgroundColor: 'rgba(128, 128, 128, 0.6)',
                    padding: 5,
                    bottom: 0,
                    alignItems: 'center',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    marginBottom: 3,
                    marginLeft: 3,
                  }}>
                  <Text
                    style={{
                      shadowColor: 'gold',
                      shadowOffset: {width: 0, height: 8},
                      shadowOpacity: 0.8,
                      shadowRadius: 10,
                      elevation: 10,
                      color: anlock8Lvl ? 'gold' : '#000',
                      fontFamily: 'Chewy-Regular',
                      fontSize: 25,
                    }}>
                    Eighth level
                  </Text>
                </View>
              </TouchableOpacity>

              {/**9 lvl */}
              <TouchableOpacity
                disabled={anlock9Lvl ? false : true}
                onPress={() => {
                  navigation.navigate('Ninth');
                }}
                style={{position: 'relative', marginBottom: 20}}>
                <Image
                  source={require('../assets/levelImgs/9.jpg')}
                  style={{
                    width: windowWidth * 0.8,
                    height: 200,
                    borderRadius: 20,
                    borderColor: anlock9Lvl
                      ? 'gold'
                      : 'rgba(128, 128, 128, 0.6)',
                    borderWidth: 3,
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    width: windowWidth * 0.8 - 6,
                    backgroundColor: 'rgba(128, 128, 128, 0.6)',
                    padding: 5,
                    bottom: 0,
                    alignItems: 'center',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    marginBottom: 3,
                    marginLeft: 3,
                  }}>
                  <Text
                    style={{
                      shadowColor: 'gold',
                      shadowOffset: {width: 0, height: 8},
                      shadowOpacity: 0.8,
                      shadowRadius: 10,
                      elevation: 10,
                      color: anlock9Lvl ? 'gold' : '#000',
                      fontFamily: 'Chewy-Regular',
                      fontSize: 25,
                    }}>
                    Ninth level
                  </Text>
                </View>
              </TouchableOpacity>

              {/**10 lvl */}
              <TouchableOpacity
                disabled={anlock10Lvl ? false : true}
                onPress={() => {
                  navigation.navigate('Tenth');
                }}
                style={{position: 'relative', marginBottom: 20}}>
                <Image
                  source={require('../assets/levelImgs/10.jpg')}
                  style={{
                    width: windowWidth * 0.8,
                    height: 200,
                    borderRadius: 20,
                    borderColor: anlock10Lvl
                      ? 'gold'
                      : 'rgba(128, 128, 128, 0.6)',
                    borderWidth: 3,
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    width: windowWidth * 0.8 - 6,
                    backgroundColor: 'rgba(128, 128, 128, 0.6)',
                    padding: 5,
                    bottom: 0,
                    alignItems: 'center',
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    marginBottom: 3,
                    marginLeft: 3,
                  }}>
                  <Text
                    style={{
                      shadowColor: 'gold',
                      shadowOffset: {width: 0, height: 8},
                      shadowOpacity: 0.8,
                      shadowRadius: 10,
                      elevation: 10,
                      color: anlock10Lvl ? 'gold' : '#000',
                      fontFamily: 'Chewy-Regular',
                      fontSize: 25,
                    }}>
                    Tenth level
                  </Text>
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>

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
                fontSize: 40,
              }}>
              Back
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default GameScreen;
