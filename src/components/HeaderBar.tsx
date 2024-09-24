import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import GradientBgIcon from './GradientBgIcon';
import ProfilePic from './ProfilePic';


interface headPropsType{
    title?: string;
}
const HeaderBar: React.FC<headPropsType> = ({title}) => {
  return (
    <View style ={styles.headViewContainer}>
      
      <GradientBgIcon name ="menu" 
      color={COLORS.primaryLightGreyHex} 
      size= {FONTSIZE.size_16}>

      </GradientBgIcon>

      <Text style= {styles.titleHeaderText}>
      {title}</Text>
      <ProfilePic></ProfilePic>
    </View>
  )
}

export default HeaderBar

const styles = StyleSheet.create({
  headViewContainer: {
    padding: SPACING.space_30,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
  },

  titleHeaderText: {
    fontFamily:FONTFAMILY.poppins_semibold,
    fontSize:FONTSIZE.size_20,
    color:COLORS.primaryWhiteHex,
  }
    
})