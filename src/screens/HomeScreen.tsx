import { Platform, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useStore } from '../store/store'
import CoffeeData from '../data/CoffeeData';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import { ScreenContainer, ScreenStackHeaderSearchBarView } from 'react-native-screens';
import HeaderBar from '../components/HeaderBar';
import CustomIcons from '../components/customIcons';

const getCategoriesFromData = (data: any) => {
  let temp: any = {};
  for (let i = 0 ; i < data.length ; i++) {
    if (temp[data[i].name] === undefined) {
      temp[data[i].name] = 1;
    }
    else{
      temp[data[i].name]++;
    }
}

  let categories = Object.keys(temp);
    categories.unshift("All");
    return categories;

  };

const getCoffeeList = (catogery:string,data:any)=>{
  if (catogery === "All")
    return data;
  else
  return data.filter((item:any) => item.name === catogery);

} 



const HomeScreen = () => {
  const coffeeList = useStore((state:any) => state.coffeeList);
  const beanList = useStore((state:any) => state.beanList) ;
  const [categories,setCategories] = useState(getCategoriesFromData(coffeeList),);
  const[categoryIndex,setCategoryIndex] = useState({
    index : 0,
    category : categories[0],
  });
  const [searchText,setSearchText] = useState(" ");
  const [sortedcoffee,setSortedCoffee] = useState(getCoffeeList(categoryIndex.category,coffeeList));
  const bottomTabHeight = useBottomTabBarHeight();
  return (
    <View style= {[styles.Screencontainer]}>
      <StatusBar barStyle= "default" backgroundColor={COLORS.primaryBlackHex}/>
      <ScrollView 
      showsVerticalScrollIndicator= {false} 
      contentContainerStyle={styles.scrollviewflex} >
      
      <HeaderBar title="" />
      <Text style= {styles.screenTitle}>
        Find the best{'\n'}Coffee for you
      </Text>
      <View style={styles.textInputContainer}>
      <TouchableOpacity 
      style={styles.touchableOpacityStyle}
      onPress={()=>{}} >
        <CustomIcons 
        style = {styles.inputIconStyle}
        name = "search" 
        size = {FONTSIZE.size_24} 
        color ={searchText.length>0?COLORS.primaryOrangeHex:COLORS.primaryGreyHex}> 
        </CustomIcons>
      </TouchableOpacity>
      <TextInput 
      placeholder='Find Your Coffee' 
      value={searchText} 
      onChangeText={text=>setSearchText(text)}
      placeholderTextColor={COLORS.primaryLightGreyHex}
      style={styles.textInputBox}
      returnKeyType="search"
      selectTextOnFocus={true}
      />
      </View>

      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentScrollViewContainerStyle}
      >
        {categories.map((data,index)=>(
          <View
          key={index.toString()} 
          style={styles.categoryScrollViewDataStyle}>
            <TouchableOpacity 
            onPress={()=>{
              setCategoryIndex({index:index,category:categories[index]})
              setSortedCoffee([...getCoffeeList(categories[index],coffeeList)])
            }}
            style={[styles.categoryScrollViewItem,categoryIndex.index === index?{borderColor:COLORS.primaryOrangeHex}:{}]}
              >
                <Text style={[styles.categoryTextData,categoryIndex.index=== index?{color:COLORS.primaryOrangeHex}:{}]}>
                  {data} </Text>
                   {categoryIndex.index=== index?(
                    <View style = {styles.activeCategory}></View>
                  ):(<></>)}

            </TouchableOpacity>
          </View>

        ))}

      </ScrollView>
      </ScrollView>
    
    
    
    
    
    
    
    
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
Screencontainer:{
  flex:1,
  backgroundColor:COLORS.primaryBlackHex,
  paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
                },

scrollviewflex:{
flexGrow:1,
      },
screenTitle:{
  fontSize:FONTSIZE.size_28,
  fontFamily:FONTFAMILY.poppins_semibold,
  color:COLORS.primaryWhiteHex,
 paddingLeft:SPACING.space_30
},
textInputContainer:{
borderRadius:BORDERRADIUS.radius_20,
margin:  SPACING.space_30,
  backgroundColor: COLORS.primaryDarkGreyHex,
  flexDirection:"row",
  alignItems:"center",
  
},
inputIconStyle:{
  marginHorizontal:SPACING.space_20

},
touchableOpacityStyle:{

},
textInputBox:{
height:SPACING.space_20*3,
fontFamily:FONTFAMILY.poppins_medium,
fontSize:FONTSIZE.size_18,
color:COLORS.primaryWhiteHex,
flex:1,
},

contentScrollViewContainerStyle:{
  paddingHorizontal:SPACING.space_20,
  marginBottom:SPACING.space_20,


},

categoryTextData:{
  
  fontFamily:FONTFAMILY.poppins_semibold,
  fontSize:FONTSIZE.size_16,
  color:COLORS.primaryLightGreyHex,
  flex:1,
},

categoryScrollViewDataStyle:{
paddingHorizontal:SPACING.space_10
},
activeCategory:{

},
categoryScrollViewItem:{
alignItems:"center",
justifyContent: 'center',    
backgroundColor: 'transparent',
borderRadius: 10,
borderColor: COLORS.primaryLightGreyHex,
borderWidth: 2,
paddingHorizontal:10,
paddingVertical:5,
},

})