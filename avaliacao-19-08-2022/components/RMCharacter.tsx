import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  Modal,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform, 
  StatusBar
} from 'react-native';

import { 
  useEffect, 
  useState 
} from 'react';

import Api from '../services/Api';

import { ICharacter } from '../types';

const EmptyCharacter = {
  "id": 0,
  "episode":[],
  "gender": "",
  "image": "",
  "location": {
    "name": "",
  },
  "name": "",
  "species": "",
  "status": "",
}

function RMCharacter() {
  const [character, setCharacter] = useState<ICharacter[]>();
  const [ showModal, setShowModal ] = useState(false);
  const [ selectedCharacter, setSelectedCharacter ] = useState<ICharacter>(EmptyCharacter)

  useEffect(() => {
    Api.get('character').then(
      res => {
        setCharacter(res.data.results)
      }
    )
  }, [])
  
  return(
    <SafeAreaView
      style={styles.AndroidSafeArea}
    >
      <ScrollView>
        <View
          style={styles.container}
        >
          { character?.map(
            (item, index) => (
              <View 
                style={styles.card}
                key={index}
              >
                <Image 
                  style={{ width: 100, height: 100 }}
                  source={{ uri: item.image }}
                />
                <View
                  style={styles.textBox}
                >
                  <View>
                    <Text
                      style={styles.textName}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={styles.text}
                    >
                      {item.species}
                    </Text>
                    <Text
                      style={styles.text}
                    >
                      {item.gender}
                    </Text>
                  </View>
                  <Pressable
                    onPress={() => {
                      setSelectedCharacter(item);
                      setShowModal(true);
                    }}
                    style={styles.detailsButton}
                  >
                    <Text style={styles.detailsButtonText}>Ver Mais</Text>
                  </Pressable>
                </View>
              </View>
            )
          ) }
          </View>
      </ScrollView>
      <Modal
        animationType='slide'
        visible={showModal}
      >
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <View style={styles.detailsButton}>
              <Text style={styles.closeModal} onPress={() => setShowModal(!showModal)}>X</Text>
            </View>
            <View style={styles.contentContainer}>
              <Image 
                style={{ width: 150, height: 150, borderRadius: 5, }}
                source={{ uri: selectedCharacter.image }}
              />
              <Text style={[styles.textName, {marginBottom: 15}]}>{selectedCharacter.name}</Text>
              <View style={styles.infoContainer}>
                <Text style={styles.infoType}>Gender:</Text>
                <Text style={styles.infoValue}>{selectedCharacter.gender}</Text>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.infoType}>Specie:</Text>
                <Text style={styles.infoValue}>{selectedCharacter.species}</Text>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.infoType}>Status:</Text>
                <Text style={styles.infoValue}>{selectedCharacter.status}</Text>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.infoType}>Location:</Text>
                <Text style={styles.infoValue}>{selectedCharacter.location.name}</Text>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.infoType}>Quantity of Episodes:</Text>
                <Text style={styles.infoValue}>{selectedCharacter.episode.length}</Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: '#7B25F0',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  container: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee'
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#7B25F0',
    width: Dimensions.get('window').width - 40,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 12,
    margin: 12
  },
  textBox: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: "space-between"
  },
  textName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  text: {
    color: '#fff'
  },
  detailsButton: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  detailsButtonText: {
    backgroundColor: "#fff",
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 3,
    color: '#5d15bf',
    elevation: 10,
    fontWeight: 'bold',
  },
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
  },
  modalContainer: {
    width: Dimensions.get('window').width - 40,
    backgroundColor: "#7B25F0",
    padding: 8,
    borderRadius: 8,
  },
  closeModal: {
    backgroundColor: "#fff",
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 3,
    color: '#5d15bf',
    elevation: 10,
    fontWeight: 'bold',
  },
  contentContainer: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  infoContainer: {
    flexDirection: 'row',
    padding: 2,
  },
  infoType: {
    color: '#fff',
    fontWeight: 'bold',
  },
  infoValue: {
    color: '#fff',
    textAlign: 'center',
    marginLeft: 8,
  }
})

export default RMCharacter