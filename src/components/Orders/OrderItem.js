import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  Image,
  Pressable,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const OrderItem = ({ navigation, itemData }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { readableDate, totalAmount, items } = itemData;

  return (
    <Pressable style={styles.container} onPress={() => setShowDetails(prevState => !prevState)}>
      <View style={styles.orderContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: items[0].images[0] }} />
        </View>
        <View style={styles.orderDetails}>
          <Text numberOfLines={2} style={styles.date}>
            {readableDate}
          </Text>
          <Text style={styles.total}>${totalAmount}</Text>
        </View>
        <AntDesign name={showDetails ? 'down' : 'right'} color='#777' size={23} />
      </View>
      {showDetails && (
        <View>
          {items.map(item => (
            <View style={styles.orderItemsContainer} key={item.id}>
              <View style={styles.orderDetailsContainer}>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <Text style={{ fontFamily: 'poppins-bold', fontSize: 16 }}>
                  {`${item.title.split(' ')[0]} ${item.title.split(' ')[2]}`}
                </Text>
              </View>
              <Text style={{ fontFamily: 'poppins-bold', fontSize: 16 }}>${item.price}</Text>
            </View>
          ))}
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
  },
  orderContainer: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imageContainer: {
    width: 100,
    height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  orderDetails: {
    alignItems: 'center',
  },
  date: {
    fontFamily: 'poppins-bold',
    fontSize: 16,
  },
  total: {
    fontFamily: 'poppins-regular',
    fontSize: 16,
    color: '#777',
  },
  orderItemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingVertical: 8,
  },
  orderDetailsContainer: {
    flexDirection: 'row',
  },
  quantity: {
    fontFamily: 'poppins-regular',
    fontSize: 16,
    paddingRight: 6,
    color: '#ACACAC',
  },
});

export default OrderItem;
