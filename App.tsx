import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import Customicons from './src/components/customIcons';
import PaymentScreen from './src/screens/PaymentScreen';
import TabNavigator from './src/navigation/TabNavigator';


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
        

      </stack.Navigator>
    </NavigationContainer>

  );
   
}

const styles = StyleSheet.create({
  
});

export default App;
