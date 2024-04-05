import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Linking,
  BackHandler,
} from 'react-native';
import {Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DeviceInfo from 'react-native-device-info';

const WVScreen = ({navigation, route}) => {
  const [idfa, setIdfa] = useState(route.params?.idfa);
  console.log('WVScreen==>', idfa);

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
      await AsyncStorage.setItem('ProductScreen', jsonData);
      console.log('Дані збережено в AsyncStorage');
    } catch (e) {
      console.log('Помилка збереження даних:', e);
    }
  };

  const getData = async () => {
    try {
      const jsonData = await AsyncStorage.getItem('ProductScreen');
      if (jsonData !== null) {
        const parsedData = JSON.parse(jsonData);
        console.log('parsedData==>', parsedData);
        setIdfa(parsedData.idfa);
      }
    } catch (e) {
      console.log('Помилка отримання даних:', e);
    }
  };

  const prod = `https://reactnative.dev/?advertising_id=${idfa}`;

  //// кастомний юзерагент
  const deviceInfo = {
    deviceBrand: DeviceInfo.getBrand(),
    deviceId: DeviceInfo.getDeviceId(),
    deviceModel: DeviceInfo.getModel(),
    deviceSystemName: DeviceInfo.getSystemName(),
    deviceSystemVersion: DeviceInfo.getSystemVersion(),
  };

  const customUserAgent = `Mozilla/5.0 (${deviceInfo.deviceSystemName}; ${deviceInfo.deviceModel}) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1`;
  //console.log(customUserAgent);
  useEffect(() => {
    WebView.userAgent = customUserAgent;
  }, []);

  const refWebview = useRef(null);

  //ф-ція для повернення назад
  const goBackBtn = () => {
    if (refWebview && refWebview.current) {
      refWebview?.current?.goBack();
    }
  };

  //ф-ція для оновлення сторінки
  const reloadPageBtn = () => {
    if (refWebview && refWebview.current) {
      refWebview?.current?.reload();
    }
  };

  const [redirectUrl, setRedirectUrl] = useState('');

  const handleNavigationStateChange = navState => {
    const {url} = navState;
    console.log('NavigationState: ', url);
    if (
      url.includes(
        'https://api.paymentiq.io/paymentiq/api/piq-redirect-assistance',
      )
    ) {
      setRedirectUrl(
        `https://marvelous-cool-win.space/C2WY8x5g?advertising_id=${idfa}`,
      );
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#191d24'}}>
      <WebView
        userAgent={customUserAgent}
        originWhitelist={[
          '*',
          'http://*',
          'https://*',
          'intent://*',
          'tel:*',
          'mailto:*',
        ]}
        onShouldStartLoadWithRequest={event => {
          const {url} = event;
          console.log('Click==>', url);
          if (url.startsWith('mailto:')) {
            Linking.openURL(url);
            return false;
          } else if (
            url.startsWith('https://m.facebook.com/') ||
            url.startsWith('https://www.facebook.com/') ||
            url.startsWith('https://www.instagram.com/') ||
            url.startsWith('https://twitter.com/') ||
            url.startsWith('https://www.whatsapp.com/') ||
            url.startsWith('https://t.me/')
          ) {
            Linking.openURL(url);
            return false;
          } else if (
            url.includes('bitcoin') ||
            url.includes('litecoin') ||
            url.includes('dogecoin') ||
            url.includes('tether') ||
            url.includes('ethereum') ||
            url.includes('bitcoincash')
          ) {
            return false;
          } else if (url === 'https://jokabet.com/') {
            refWebview.current.injectJavaScript(
              `window.location.href = '${redirectUrl}'`,
            );
            return false;
          } else {
            return true;
          }
        }}
        onNavigationStateChange={handleNavigationStateChange}
        textZoom={100}
        allowsBackForwardNavigationGestures={true}
        domStorageEnabled={true}
        javaScriptEnabled={true}
        source={{uri: prod}}
        allowsInlineMediaPlayback={true}
        setSupportMultipleWindows={false}
        mediaPlaybackRequiresUserAction={false}
        allowFileAccess={true}
        javaScriptCanOpenWindowsAutomatically={true}
        style={{flex: 1, marginBottom: 7}}
        ref={refWebview}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: -10,
        }}>
        <TouchableOpacity
          style={{marginLeft: 40}}
          onPress={() => {
            goBackBtn();
          }}>
          <AntDesign name="left" style={{color: '#fff', fontSize: 20}} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{marginRight: 40}}
          onPress={() => {
            reloadPageBtn();
          }}>
          <AntDesign name="reload1" style={{color: '#fff', fontSize: 20}} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default WVScreen;
