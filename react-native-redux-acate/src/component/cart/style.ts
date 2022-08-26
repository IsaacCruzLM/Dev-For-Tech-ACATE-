import {
  StyleSheet
} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 40,
    paddingVertical: 20
  },
  modalBody: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    padding: 18,
  },
  contentCart: {
    backgroundColor: '#000540',
    borderRadius: 100,
    marginHorizontal: 5,
    padding: 5
  },
  textContentCart: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15
  },
  itemCard: {
    width: 250,
    flexDirection: 'row',
    backgroundColor: '#ededeb',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginVertical: 5,
    borderColor: "#000",
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "space-between"
  },
  itemRemove: {
    backgroundColor: "red",
    color: "#FFF",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },
  closeModal: {
    width: "100%",
    alignItems: "flex-end",
  },
  closeModalContent: {
    alignItems: "center",
  },
  itensContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})