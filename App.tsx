import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/components/Login/Page/login';
import HomeTab from './src/components/Navigation/home-tab';
import SaleOrderScreen from './src/components/SaleOrder/Page/sale-order';
import CargoDetailScreen from './src/components/CargosDetail/Page/cargo-detail';
import { Provider } from 'react-native-paper';
import QRScanScreenn from './src/components/ScanQR/Pages/scan-qr';
import CustomColors from './src/constants/color';
import SplashScreen from './src/components/Splash/splash-screen';
import TodayAnalyticsScreen from './src/components/Analytics/Page/today-analytics';
import { accountStrings } from './src/constants/string';
import ListDeliveriedScreen from './src/components/Analytics/Page/list-deliveried';
import DeliveringScreen from './src/components/ScanQR/Pages/delivering';
import ChooseReasonScreen from './src/components/ScanQR/Pages/choose-reason';

function App(): JSX.Element {
  const stack = createNativeStackNavigator();
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      secondaryContainer: 'transparent',
    },
  };
  return (
    <Provider theme={theme}>
      <NavigationContainer>{
        <stack.Navigator initialRouteName='Splash'>
          <stack.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }} />
          <stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
          <stack.Screen name='HomeTab' component={HomeTab} options={{ headerBackVisible: false, headerShown: false }} />
          <stack.Screen name='CargoDetail' component={CargoDetailScreen} options={{}} />
          <stack.Screen name='TodayAnalytics' component={TodayAnalyticsScreen} options={{title: accountStrings.Today_Analytics_Text}} />
          <stack.Screen name='ListDeliveried' component={ListDeliveriedScreen} options={{title: 'Đã Giao', headerBackTitleVisible: false, headerTitleStyle: {fontSize: 24}}} />
          <stack.Screen name='SaleOrder' component={SaleOrderScreen} options={{ headerBackTitleVisible: false }} />
          <stack.Screen name='QRScan' component={QRScanScreenn} options={{ title: 'Quét mã in trên phiếu', headerStyle: { backgroundColor: CustomColors.Primary_Blue, }, headerTitleStyle: { color: 'white', fontSize: 24, fontWeight: 'bold' }, headerTintColor: 'white' }} />
          <stack.Screen name='Delivering' component={DeliveringScreen} options={{ headerShown: false, gestureEnabled: false }} />
          <stack.Screen name='ChooseReason' component={ChooseReasonScreen} options={{ headerBackTitleVisible: false, headerTitleStyle: {fontSize: 24} }} />
        </stack.Navigator>
      }</NavigationContainer>
    </Provider>

  );
}

export default App;
