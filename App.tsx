import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import CustomIcon from './src/components/CustomIcon';
import PaymentScreen from './src/screens/PaymentScreen';
import TabNavigator from './src/navigators/TabNavigator';
import DetailsScreen from './src/screens/DetailsScreen';
import CartScreen from './src/screens/CartScreen';


const stack = createNativeStackNavigator()

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown:false}}>
        
        <stack.Screen name = "tabnavigation"
                     component={TabNavigator}
                     options={{animation:"slide_from_bottom"}}
                      />
        <stack.Screen name="homescreen"
                     component={HomeScreen}
                     options={{animation:"slide_from_bottom"}} />
        <stack.Screen name="paymentscreen" 
                      component={PaymentScreen}
                      options={{animation:"slide_from_bottom"}} />
        <stack.Screen name="detailscreen" 
                      component={DetailsScreen}
                      options={{animation:"slide_from_bottom"}} />
        
        

      </stack.Navigator>
    </NavigationContainer>

  );
   
}

const styles = StyleSheet.create({
  
});

export default App;
