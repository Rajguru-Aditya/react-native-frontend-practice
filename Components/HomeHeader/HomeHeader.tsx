import { Text, TextInput, View } from 'react-native'
import React from 'react'
import styles from './styles'
import AntIcons from 'react-native-vector-icons/AntDesign'

const HomeHeader = ({page}) => {
  return (
    <View style={styles.headerContainer}>
      <View  style={styles.searchBar}>
        <AntIcons name="search1" size={25} color="#999" />
        <TextInput style={styles.textInput} placeholder="Search Furniture" placeholderTextColor="#999" />
      </View>
      {
        page === 'Home' ? (
          <View style={styles.iconsContainer}>
            <View style={styles.notificationAndCart}>
              <AntIcons name="bells" size={20} color="#999" />
            </View>
            <View style={styles.notificationAndCart}>
              <AntIcons name="shoppingcart" size={20} color="#999" />
            </View>
          </View>
        ) : page === "Discovery" ? (
          <View style={styles.iconsContainer}>
            <View style={styles.notificationAndCart}>
              <AntIcons name="bells" size={20} color="#999" />
            </View>
          </View>
        ) : null
      }
    </View>
  )
}

export default HomeHeader