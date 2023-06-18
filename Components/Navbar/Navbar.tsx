import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const Navbar = () => {

  const navItems = [
    {
      name: 'Home',
      img: "https://img.icons8.com/fluency-systems-filled/50/888888/home.png",
    },
    {
      name: 'Discover',
      img: "https://img.icons8.com/ios/50/888888/compass--v1.png",
    },
    {
      name: 'Wishlist',
      img: "https://img.icons8.com/ios-filled/50/888888/half-heart.png",
    },
    {
      name: 'Orders',
      img: "https://img.icons8.com/sf-regular/50/888888/delivery.png",
    },
    {
      name: 'Profile',
      img: "https://img.icons8.com/material/50/888888/user-male-circle--v1.png",
    },
  ]

  return (
    <View style={styles.navbarContainer}>
      {
        navItems.map((item, index) => (
          <View key={index}>
            <View style={styles.navbarItemContainer}>
              <View style={styles.navbarImgContainer}>
                <Image source={{uri: item.img}} alt={item.name} style={styles.navbarImage} />
              </View>
              <Text style={styles.navbarName}>{item.name}</Text>
            </View>
          </View>
        ))
      }
    </View>
  )
}

export default Navbar