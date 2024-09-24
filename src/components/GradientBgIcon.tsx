import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, SPACING } from '../theme/theme';
import CustomIcons from './customIcons';

interface gradientBgIconProps{
  name:string;
  color:string;
  size:number;
}

const GradientBgIcon: React.FC<gradientBgIconProps> = ({name,color,size}) => {
  return (
    <View style = {styles.mainviewcontainer}>
      <LinearGradient
      start={{x: 0, y: 0}}
      end={{x:1, y: 1}}
      colors={[COLORS.primaryGreyHex,COLORS.primaryBlackHex]}
      style={styles.linearGradientStyle} >
        
        <CustomIcons 
        name = {name}
        color={color}
        size={size}>

        </CustomIcons>
      </LinearGradient>
    </View>
  )
}

export default GradientBgIcon

const styles = StyleSheet.create({

  mainviewcontainer:{
    borderWidth:2,
    borderColor:COLORS.primaryDarkGreyHex,
    borderRadius:SPACING.space_12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:COLORS.secondaryDarkGreyHex,
    overflow: 'hidden',

  },

  linearGradientStyle:{
    height:SPACING.space_36,
    width:SPACING.space_36,
    alignItems:"center",
    justifyContent:"center",

  },

})