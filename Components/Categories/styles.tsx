import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    boxSizing: 'border-box',
  },

  basicText: {
    fontSize: 14,
    color: '#222',
  },

  categoryMainContainer: {
    alignItems: 'center',
    marginRight: 15,
  },

  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    gap: 10,
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "#e9e9e9",
  },

  categoryImage: {
    height: 25,
    width: 25,
  },

  categoryName: {
    fontSize: 12,
    color: '#222',
    fontWeight: 'bold',
  },
})

export default styles