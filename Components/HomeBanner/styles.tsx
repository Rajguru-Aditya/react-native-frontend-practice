import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
    gap: 10,
  },

  bannerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
    width: '100%',
    height: 150,
    backgroundColor: '#000',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    borderRadius: 20,
  },

  linearGradient: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 20,
    padding: 15,
  },

  basicText: {
    fontSize: 14,
    color: '#222',
  },

  bannerTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 5,
  },

  bannerTitle: {
    fontSize: 24,
    color: '#f5f5f5',
    fontWeight: 'bold',
  },

  bannerText: {
    fontSize: 14,
    color: '#f5f5f5',
    width: '80%',
  },

  bannerButton: {
    backgroundColor: '#f5f5f5',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    boxSizing: 'border-box',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    elevation: 10,
    flexDirection: 'row',
    gap: 5,
    marginTop: 10,
  },

  bannerButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222',
  },
})

export default styles