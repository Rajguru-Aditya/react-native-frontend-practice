import { ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'
import AntIcons from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient'

const HomeBanner = () => {
  return (
    <View style={styles.container}>

        <ImageBackground source={{uri: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"}} style={styles.bannerContainer}
          imageStyle={{borderRadius: 20}}
          resizeMode='cover'
        >
        <LinearGradient start={{x: 0.5, y: 0}} end={{x: 1, y: 0}} colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0)']} style={styles.linearGradient}>
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerTitle}>Tamas Living</Text>
            <Text style={styles.bannerText}>New Collection from Water Knoll that is perfect for your living room</Text>
            <TouchableOpacity style={styles.bannerButton} activeOpacity={.8}>
              <Text style={styles.bannerButtonText}>Shop Now</Text>
              <AntIcons name="arrowright" size={20} color="#222" />
            </TouchableOpacity>
          </View>
          </LinearGradient>
        </ImageBackground>
    </View>
  )
}

export default HomeBanner