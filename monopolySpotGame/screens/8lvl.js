import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';
import Timer from '../components/Timer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Eighth = ({navigation}) => {
  const [board, setBoard] = useState([
    {id: 1, image: require('../assets/8LVL/image_part_001.jpg')},
    {id: 2, image: require('../assets/8LVL/image_part_002.jpg')},
    {id: 3, image: require('../assets/8LVL/image_part_003.jpg')},
    {id: 4, image: require('../assets/8LVL/image_part_004.jpg')},
    {id: 5, image: require('../assets/8LVL/image_part_005.jpg')},
    {id: 6, image: require('../assets/8LVL/image_part_006.jpg')},
    {id: 7, image: require('../assets/8LVL/image_part_007.jpg')},
    {id: 8, image: require('../assets/8LVL/image_part_008.jpg')},
    {id: 9, image: require('../assets/8LVL/image_part_009.jpg')},
    {id: 10, image: require('../assets/8LVL/image_part_010.jpg')},
    {id: 11, image: require('../assets/8LVL/image_part_011.jpg')},
    {id: 12, image: require('../assets/8LVL/image_part_012.jpg')},
    {id: 13, image: require('../assets/8LVL/image_part_013.jpg')},
    {id: 14, image: require('../assets/8LVL/image_part_014.jpg')},
    {id: 15, image: require('../assets/8LVL/image_part_015.jpg')},
    {
      id: 16,
      image: require('../assets/whait.jpeg'),
    },
  ]);

  const [timer, setTimer] = useState(600);
  const [isRuning, setIsRuning] = useState(false);

  const [anlock9Lvl, setAnlock9Lvl] = useState(false);
  // AsyncStorage
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [anlock9Lvl]);

  const setData = async () => {
    try {
      const data = {
        anlock9Lvl,
      };
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem('Eighth', jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
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

  //эфект обратного отщета времени
  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (isRuning) {
        setTimer(prevTimer => prevTimer - 1);
      }
    }, 1000);

    if (timer === 0) {
      clearInterval(timerInterval);
      Alert.alert(
        'GAME OVER!!!',
        'Go back and try again',
        [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('GameScreen');
            },
          },
        ],
        {cancelable: false},
      );
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [timer, isRuning]);

  //формат времени
  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
      .toString()
      .padStart(2, '0')}`;
  };

  //oстановка таймера
  const handleChangeTimerRunState = () => {
    setIsRuning(!isRuning);
  };
  //////////////////////////////////////////

  //////////////////////////////////

  const [emptyIndex, setEmptyIndex] = useState(0);
  //console.log(emptyIndex);
  const [firtRender, setFirtRender] = useState(true);
  const [complited, setComplited] = useState(false);

  //перемешивает пазлы при первом рендере
  useEffect(() => {
    mixingPuzzles();
  }, []);
  //

  //если собрал пазл то сообщ о победе(пропуская первый рендер)
  useEffect(() => {
    if (firtRender) {
      setFirtRender(false);
    } else if (isBoardSolved()) {
      //Alert.alert('Ты победил!');
      setAnlock9Lvl(true);
      setComplited(true);
    }
  }, []);
  /////////////////////////////

  const canMovePiece = pieceIndex => {
    const rowSize = Math.sqrt(board.length); ///
    const emptyRow = Math.floor(emptyIndex / rowSize);
    const emptyCol = emptyIndex % rowSize;
    const pieceRow = Math.floor(pieceIndex / rowSize);
    const pieceCol = pieceIndex % rowSize;

    return (
      (emptyRow === pieceRow && Math.abs(emptyCol - pieceCol) === 1) ||
      (emptyCol === pieceCol && Math.abs(emptyRow - pieceRow) === 1)
    );
  };

  const movePiece = pieceIndex => {
    if (canMovePiece(pieceIndex)) {
      const updatedBoard = [...board];
      [updatedBoard[pieceIndex], updatedBoard[emptyIndex]] = [
        updatedBoard[emptyIndex],
        updatedBoard[pieceIndex],
      ];
      setBoard(updatedBoard);
      setEmptyIndex(pieceIndex);
    }
  };

  //перемешивает пазл
  const mixingPuzzles = () => {
    const shuffledBoard = [...board];
    shuffledBoard.sort(() => Math.random() - 0.5);
    setBoard(shuffledBoard);
    //board.findIndex((piece) => piece.id === 16)
    const emptyIndex = shuffledBoard.findIndex(piece => piece.id === 16);
    setEmptyIndex(emptyIndex);
  };

  //проверяет собран ли борд
  const isBoardSolved = () => {
    for (let i = 0; i < board.length - 1; i++) {
      if (board[i].id !== i + 1) {
        return false;
      }
    }
    return true;
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
            marginTop: 50,
          }}>
          {/**TIMER */}
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            {isRuning ? (
              <TouchableOpacity
                style={{
                  marginRight: 10,
                  borderWidth: 3,
                  borderColor: '#ffcd00',
                  color: '#ffcd00',
                  paddingLeft: 10,
                  paddingRight: 10,
                  height: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={handleChangeTimerRunState}>
                <Text style={{color: '#ffcd00', fontSize: 25}}>Stop</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{
                  marginRight: 10,
                  borderWidth: 3,
                  borderColor: '#ffcd00',
                  color: '#ffcd00',
                  paddingLeft: 12,
                  paddingRight: 12,
                  height: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={handleChangeTimerRunState}>
                <Text style={{color: '#ffcd00', fontSize: 25}}>Play</Text>
              </TouchableOpacity>
            )}

            <Text
              style={{
                fontSize: 40,
                borderWidth: 3,
                borderColor: '#ffcd00',
                color: '#ffcd00',
                paddingLeft: 10,
                paddingRight: 10,
                height: 60,
              }}>
              {formatTime(timer)}
            </Text>
          </View>

          {/** Борд що збирається */}
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: 280,
              borderWidth: 10,
              //borderRadius: 0,
              borderColor: 'gold',
            }}>
            {board.map((piece, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  width: 65,
                  height: 65,
                  justifyContent: 'center',
                  //alignItems: 'center',
                  backgroundColor: 'lightblue',
                }}
                onPress={() => movePiece(index)}
                disabled={!canMovePiece(index) || !isRuning}>
                <Image source={piece.image} style={{width: 65, height: 65}} />
              </TouchableOpacity>
            ))}
          </View>

          {/** Картинка яку треба зібрати */}
          <View style={{marginTop: 20}}>
            <Image
              source={require('../assets/newDiz/image8.jpeg')}
              style={{
                width: 200,
                height: 200,
                borderWidth: 5,
                borderColor: 'gold',
              }}
            />
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

          {complited && (
            <View
              style={{
                position: 'absolute',
                alignItems: 'center',
                borderWidth: 3,
                borderColor: 'gold',
                backgroundColor: '#000',
                top: 100,
                width: '90%',
                height: 200,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'gold',
                  fontFamily: 'Chewy-Regular',
                  fontSize: 30,
                }}>
                CONGRAT!!!
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Ninth');
                }}>
                <View style={{alignItems: 'center'}}>
                  <Text
                    style={{
                      color: 'gold',
                      fontFamily: 'Chewy-Regular',
                      fontSize: 30,
                    }}>
                    Tab hire for
                  </Text>
                </View>

                <Text
                  style={{
                    color: 'gold',
                    fontFamily: 'Chewy-Regular',
                    fontSize: 30,
                  }}>
                  go to the next level
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default Eighth;
