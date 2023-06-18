import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import AntIcons from 'react-native-vector-icons/AntDesign'

const Recommendations = () => {

  const products = [
    {
      name: 'Comfy Chair',
      seller: 'Walter Knoll',
      cost: 200,
      img: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    },
    {
      name: 'Night Lamp',
      seller: 'Walter Knoll',
      cost: 150,
      img: "https://images.unsplash.com/photo-1588732282235-d4a99e41d0d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
    },
  ]

  const RecommendedProduct = ({name, seller, cost, img}) => (
    <View style={styles.recommendedProductContainer}>
      <AntIcons name="heart" size={20} color="#C74644" style={styles.recommendationHeart} />
      <View style={styles.recommendationImgContainer}>
        <Image source={{uri: img}} style={styles.recommendationImage} borderRadius={20}/>
      </View>
      <View style={styles.recommendationTextContainer}>
        <Text style={styles.recommendationName}>{name}</Text>
        <Text style={styles.recommendationSeller}>{seller}</Text>
        <Text style={styles.recommendationPrice}>${cost}</Text>
      </View>
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.recommendationContainerHeader}>
        <Text style={styles.headerText}>Recommendations</Text>
        <Text style={styles.seeAllText}>See All</Text>
      </View>
      <View style={styles.recommendationContainerBody}>
        {
          products.map((product, index) => (
            <RecommendedProduct key={index} name={product.name} seller={product.seller} cost={product.cost} img={product.img} />
            )
          )
        }
      </View>
    </View>
  )
}

export default Recommendations