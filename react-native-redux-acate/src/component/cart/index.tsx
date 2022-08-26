import {
  View,
  TouchableOpacity,
  Text,
  Modal
} from 'react-native';

import {
  useState
} from 'react';

import {
  useSelector,
  useDispatch
} from  'react-redux';

import {
  cartStateData,
  removeCartItem,
} from '../../store/modules/cart/reducer'

import { 
  AntDesign 
} from '@expo/vector-icons';

import styles from './style'

const Cart = () => {
  const [ showCartModal, setShowCartModal ] = useState(false)
  const cart = useSelector(cartStateData);

  const dispatch = useDispatch();

  const removeItemInCart = (index: number) => {
    dispatch(removeCartItem(index));
  }
  
  return(
    <View
      style={styles.container}
    >
      <Modal 
        animationType='slide'
        visible={showCartModal}
        onRequestClose={ 
          () => setShowCartModal(!showCartModal)
        }
      >
        <View
          style={styles.modalBody}
        >
          <TouchableOpacity
            onPress={ () => setShowCartModal(!showCartModal)}
            style={styles.closeModal}
          >
            <View style={styles.closeModalContent}>
              <AntDesign
                name="close"
                size={24}
                color="black"
              />
              <Text>Fechar</Text>
            </View>
          </TouchableOpacity>
          
          {cart.length > 0 ? (
            <View style={styles.itensContainer}>
              { cart.map( (item, index) => (
                <View style={styles.itemCard}>
                  <Text>{item.name}</Text>
                  <Text style={styles.itemRemove} onPress={() => removeItemInCart(index)}>X</Text>
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.itensContainer}>
              <Text>Adicione itens ao seu carrinho</Text>
            </View>
          )}
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => setShowCartModal(!showCartModal)}
      >

      <AntDesign
        name="shoppingcart"
        size={24}
        color="black"
        />
      </TouchableOpacity>
      <View
        style={styles.contentCart}
      >
        <Text
        style={styles.textContentCart}
        >
          {cart?.length}
        </Text>
      </View>
    </View>
  )
};

export default Cart;