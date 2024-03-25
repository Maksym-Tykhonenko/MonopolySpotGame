import React from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const RulesScreen = ({navigation}) => {
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
          }}>
          <View style={{marginTop: 50, marginBottom: 50}}>
            <ScrollView>
              <View>
                <Text
                  style={{
                    color: 'gold',
                    padding: 10,
                    fontSize: 30,
                    fontFamily: 'Chewy-Regular',
                  }}>
                  Rules of the game "Spot game":
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'gold',
                    padding: 10,
                    fontSize: 24,
                    fontFamily: 'Chewy-Regular',
                  }}>
                  Goal of the game: Collect a photo of nature by placing all the
                  parts of the picture in the correct sequence
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'gold',
                    padding: 10,
                    fontSize: 24,
                    fontFamily: 'Chewy-Regular',
                  }}>
                  Levels: The game consists of 10 levels. Starting with the
                  first level, the following levels are unlocked as you
                  progress.
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'gold',
                    padding: 10,
                    fontSize: 24,
                    fontFamily: 'Chewy-Regular',
                  }}>
                  Start of the game: Press the "Start" button to start the
                  timer. You are given 10 minutes for each level.
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'gold',
                    padding: 10,
                    fontSize: 24,
                    fontFamily: 'Chewy-Regular',
                  }}>
                  Collection of photos: Move the pieces of the picture by
                  clicking on them to place them in the correct order. Fragments
                  can only be moved to empty spaces.
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'gold',
                    padding: 10,
                    fontSize: 24,
                    fontFamily: 'Chewy-Regular',
                  }}>
                  Victory: If you successfully collect the picture before the
                  time runs out, you move on to the next level. If the time is
                  up, you can try again.
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'gold',
                    padding: 10,
                    fontSize: 24,
                    fontFamily: 'Chewy-Regular',
                  }}>
                  Victory: If you successfully collect the picture before the
                  time runs out, you move on to the next level.
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'gold',
                    padding: 10,
                    fontSize: 30,
                    fontFamily: 'Chewy-Regular',
                  }}>
                  Play and enjoy the game "Spot game"!
                </Text>
              </View>
              <View style={{height: 100}}></View>
            </ScrollView>
          </View>

          {/**BTN Back */}
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
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

export default RulesScreen;
