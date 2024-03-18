import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Dimensions} from 'react-native';

const GameScreen = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
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
                  fontSize: 35,
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
                    Second level
                  </Text>
                </View>
              </TouchableOpacity>

              {/**3 lvl */}
              <TouchableOpacity
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
                      shadowColor: 'gold',
                      shadowOffset: {width: 0, height: 8},
                      shadowOpacity: 0.8,
                      shadowRadius: 10,
                      elevation: 10,
                      color: 'gold',
                      fontFamily: 'Chewy-Regular',
                      fontSize: 25,
                    }}>
                    Third level
                  </Text>
                </View>
              </TouchableOpacity>

              {/**4 lvl */}
              <TouchableOpacity
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
                      shadowColor: 'gold',
                      shadowOffset: {width: 0, height: 8},
                      shadowOpacity: 0.8,
                      shadowRadius: 10,
                      elevation: 10,
                      color: 'gold',
                      fontFamily: 'Chewy-Regular',
                      fontSize: 25,
                    }}>
                    Fourth level
                  </Text>
                </View>
              </TouchableOpacity>

              {/**5 lvl */}
              <TouchableOpacity
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
                      shadowColor: 'gold',
                      shadowOffset: {width: 0, height: 8},
                      shadowOpacity: 0.8,
                      shadowRadius: 10,
                      elevation: 10,
                      color: 'gold',
                      fontFamily: 'Chewy-Regular',
                      fontSize: 25,
                    }}>
                    Fifth level
                  </Text>
                </View>
              </TouchableOpacity>

              {/**6 lvl */}
              <TouchableOpacity
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
                      shadowColor: 'gold',
                      shadowOffset: {width: 0, height: 8},
                      shadowOpacity: 0.8,
                      shadowRadius: 10,
                      elevation: 10,
                      color: 'gold',
                      fontFamily: 'Chewy-Regular',
                      fontSize: 25,
                    }}>
                    Sixth level
                  </Text>
                </View>
              </TouchableOpacity>

              {/**7 lvl */}
              <TouchableOpacity
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
                      shadowColor: 'gold',
                      shadowOffset: {width: 0, height: 8},
                      shadowOpacity: 0.8,
                      shadowRadius: 10,
                      elevation: 10,
                      color: 'gold',
                      fontFamily: 'Chewy-Regular',
                      fontSize: 25,
                    }}>
                    Seventh level
                  </Text>
                </View>
              </TouchableOpacity>

              {/**8 lvl */}
              <TouchableOpacity
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
                      shadowColor: 'gold',
                      shadowOffset: {width: 0, height: 8},
                      shadowOpacity: 0.8,
                      shadowRadius: 10,
                      elevation: 10,
                      color: 'gold',
                      fontFamily: 'Chewy-Regular',
                      fontSize: 25,
                    }}>
                    Eighth level
                  </Text>
                </View>
              </TouchableOpacity>

              {/**9 lvl */}
              <TouchableOpacity
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
                      shadowColor: 'gold',
                      shadowOffset: {width: 0, height: 8},
                      shadowOpacity: 0.8,
                      shadowRadius: 10,
                      elevation: 10,
                      color: 'gold',
                      fontFamily: 'Chewy-Regular',
                      fontSize: 25,
                    }}>
                    Ninth level
                  </Text>
                </View>
              </TouchableOpacity>

              {/**10 lvl */}
              <TouchableOpacity
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
                      shadowColor: 'gold',
                      shadowOffset: {width: 0, height: 8},
                      shadowOpacity: 0.8,
                      shadowRadius: 10,
                      elevation: 10,
                      color: 'gold',
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

export default GameScreen;
