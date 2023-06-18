import { Dimensions, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222',
  },

  seeAllText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: "#C87F45",
  },

  recommendationContainerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  recommendationContainerBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  recommendedProductContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 10,
    position: 'relative',
    width: Dimensions.get('window').width / 2 - 20,
    backgroundColor: '#fff',
  },

  recommendationImgContainer: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#eee',
    padding: 10,
  },

  recommendationImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  recommendationTextContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },

  recommendationHeart: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    elevation: 10,
  },

  recommendationName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222',
  },

  recommendationSeller: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#888',
  },

  recommendationPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#C87F45',
  },
})

export default styles