import { 
  View, 
  Text, 
  Image 
} from 'react-native';

import styles from './style';

import { IProps } from '../../type';

import { AntDesign } from '@expo/vector-icons';

import {
  useDispatch
} from  'react-redux';
import {
  addFavorite,
  removeFavorite,
} from '../../store/modules/favorites/reducer'

export default function Card({ card, favorites }: IProps){

  const dispatch = useDispatch();

  const removeOfFavorites = (id: number) => {
    dispatch(removeFavorite(id));
  }

  const addToFavorites = (id: number) => {
    dispatch(addFavorite(id));
  }

  const favoriteAction = () => {
    if(favorites.includes(parseInt(card.id))) {
      removeOfFavorites(parseInt(card.id))
    } else {
      addToFavorites(parseInt(card.id))
    }
  }

  return(
    <View
      style={styles.card}
    >
      <Image
        source={{ uri: card.image }}
        style={ styles.image }
      />
      <AntDesign 
        name={ favorites.includes(parseInt(card.id)) ? "star" : "staro"}
        size={24}
        color={ favorites.includes(parseInt(card.id)) ? "yellow" : "black"}
        style={styles.starIcon}
        onPress={() => favoriteAction()}
      />
      <View
        style={styles.imageDescriptionContainer}
      >
        <Text
          style={styles.text}
        >
          {`${card.name}, ${card.gender}`}
        </Text>
      </View>
      
    </View>
  )
}