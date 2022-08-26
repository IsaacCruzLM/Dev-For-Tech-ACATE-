import {
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Platform, 
  StatusBar
} from 'react-native';
import Card from '../components/Card';

import { useQuery } from '@apollo/client';

import INFO_PERSON from '../queries';

import {
  useSelector,
} from  'react-redux';
import {
  favoritesStateData,
} from '../store/modules/favorites/reducer';

export default function Home(){

  const { loading, error, data } = useQuery(INFO_PERSON);

  const { favorites } = useSelector(favoritesStateData);
  
  return(
    <SafeAreaView style={styles.AndroidSafeArea}>
      { loading && <Text>Loading ...</Text> }
      { error && <Text>Error ...</Text> }
      { data && 
        <FlatList
          data={data.characters.results}
          contentContainerStyle={styles.listView}
          renderItem={ ({item}) => <Card favorites={favorites} card={item}/>}
        />
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  listView: {
    paddingBottom: 20,
  }
})