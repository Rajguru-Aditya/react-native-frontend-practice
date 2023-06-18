import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const Categories = () => {

  const categories = [
    {
      id: 1,
      name: "Tables",
      image: "https://img.icons8.com/ios/50/C87F45/desk.png"
    },
    {
      id: 2,
      name: "Chairs",
      image: "https://img.icons8.com/ios/50/C87F45/office-chair-2.png"
    },
    {
      id: 3,
      name: "Sofas",
      image: "https://img.icons8.com/ios/50/C87F45/sofa.png"
    },
    {
      id: 4,
      name: "Beds",
      image: "https://img.icons8.com/ios/50/C87F45/bed.png"
    },
    {
      id: 5,
      name: "Storage",
      image: "https://img.icons8.com/ios/50/C87F45/cupboard.png"
    },
    {
      id: 6,
      name: "Lamps",
      image: "https://img.icons8.com/ios/50/C87F45/lamp.png"
    },
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({item}) => (
          <View style={styles.categoryMainContainer}>
            <View style={styles.categoryContainer}>
              <Image  style={styles.categoryImage} source={{uri: item.image}} />
            </View>
            <Text style={styles.categoryName}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default Categories