import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import HomeHeader from '../../Components/HomeHeader/HomeHeader'
import HomeBanner from '../../Components/HomeBanner/HomeBanner'
import Categories from '../../Components/Categories/Categories'
import Recommendations from '../../Components/Recommendations/Recommendations'

const Home = () => {
  return (
    <View style={styles.container}>
      <HomeHeader page={"Home"}/>
      <HomeBanner />
      <Categories />
      <Recommendations />
    </View>
  )
}

export default Home