import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native'
import { COLORS } from '../theme/theme';
import { BlurView } from '@react-native-community/blur';
import CustomIcons from '../components/customIcons';
import HomeScreen from '../screens/HomeScreen'
import FavouriteScreen from '../screens/FavouriteScreen'
import OrderHistory from '../screens/OrderHistory'
import CartScreen from '../screens/CartScreen'



const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
      
      <Tab.Navigator screenOptions={{headerShown:false,
                                    tabBarHideOnKeyboard:true,
                                    tabBarShowLabel:false,
                                    tabBarStyle:[styles.tabbarstlye],
                                    tabBarBackground: ()=> (<BlurView overlayColor='' 
                                      blurAmount={50} 
                                      style = {styles.blurview}>

            </BlurView>)}}
                                    >
        <Tab.Screen name="Home" component={HomeScreen} 
                    options={{tabBarIcon:({
                      focused, color,size }) => (
                        <CustomIcons name = "home" 
                                     size = {25}
                                     color={focused?COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex}></CustomIcons>
                      )}}
                      />
        <Tab.Screen name="Cart" component={CartScreen} options={{tabBarIcon:({
                      focused, color,size }) => (
                        <CustomIcons name = "cart" 
                                     size = {25}
                                     color={focused?COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex}></CustomIcons>
                      )}}/>
                      
        <Tab.Screen name="Favourites" component={FavouriteScreen} options={{tabBarIcon:({
                      focused, color,size }) => (
                        <CustomIcons name = "like" 
                                     size = {25}
                                     color={focused?COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex}></CustomIcons>
                      )}}/>
        <Tab.Screen name="History" component={OrderHistory} options={{tabBarIcon:({
                      focused, color,size }) => (
                        <CustomIcons name = "bell" 
                                     size = {25}
                                     color={focused?COLORS.primaryOrangeHex:COLORS.primaryLightGreyHex}></CustomIcons>
                      )}} />
        
      </Tab.Navigator>
      
  )
}

export default TabNavigator

const styles = StyleSheet.create({
  tabbarstlye: {
    height: 60,
    position: 'absolute',
    backgroundColor:COLORS.primaryBlackRGBA,
    borderTopWidth:0,
    elevation: 0,
    borderTopColor: 'transparent',
    bottom:16,
    right:16,
    left:16,
    borderRadius:30,
    overflow: 'hidden',

    
  },
  blurview: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    
  },
  customTabbarstyle: {
   borderRadius:30
  }
})