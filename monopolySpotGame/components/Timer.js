import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';

const Timer = ({time}) => {
  const [timer, setTimer] = useState(time);
  const [isRuning, setIsRuning] = useState(false);
  const [btnIsVisible, setBtnIsVisible] = useState(false);
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
              navigation.goBack();
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

  return (
    <View style={{flexDirection: 'row', marginBottom: 20}}>
      {isRuning ? (
        <TouchableOpacity
          style={{
            marginRight: 10,
            color: '#000205',
            borderWidth: 1,
            borderColor: '#ffcd00',
            //borderRadius: 20,
            color: '#ffcd00',
            paddingLeft: 10,
            paddingRight: 10,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
            color: '#000205',
            borderWidth: 1,
            borderColor: '#ffcd00',
            //borderRadius: 20,
            color: '#ffcd00',
            paddingLeft: 12,
            paddingRight: 12,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
          color: '#000205',
          borderWidth: 1,
          borderColor: '#ffcd00',
          //borderRadius: 20,
          color: '#ffcd00',
          paddingLeft: 10,
          paddingRight: 10,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          height: 60,
        }}>
        {formatTime(timer)}
      </Text>
    </View>
  );
};

export default Timer;
