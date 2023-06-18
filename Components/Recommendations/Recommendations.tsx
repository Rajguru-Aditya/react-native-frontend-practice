import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const Recommendations = () => {
  return (
    <View style={styles.container}>
      <View style={styles.recommendationContainerHeader}>
        <Text style={styles.headerText}>Recommendations</Text>
        <Text style={styles.seeAllText}>See All</Text>
      </View>
    </View>
  )
}

export default Recommendations