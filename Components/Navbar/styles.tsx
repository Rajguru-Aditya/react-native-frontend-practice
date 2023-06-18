import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    boxSizing: 'border-box',
    elevation: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },

  navbarItemContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  navbarImgContainer: {
    width: 20,
    height: 20,
    borderRadius: 15,
  },

  navbarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  navbarName: {
    fontSize: 12,
    color: '#888',
  },
})

export default styles