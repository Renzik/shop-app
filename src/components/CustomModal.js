import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Icon } from 'react-native-elements';

const CustomModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.container}>
      <Modal transparent={true} visible={modalVisible} animationType='fade'>
        <View style={{ ...styles.innerContainer, ...styles.container }}>
          <View style={styles.modalOpenContainer}>
            <View style={styles.modalOpenTopContainer}>
              <Text style={styles.modalOpenText}>Qty:</Text>
              <Icon
                size={22}
                name='close'
                color='grey'
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>

            <Picker
              itemStyle={{}}
              // style={{ paddingVertical: 0, height: 150 }}
              selectedValue={quantity}
              onValueChange={qtyVal => setQuantity(qtyVal)}>
              <Picker.Item label='1' value={1} />
              <Picker.Item label='2' value={2} />
              <Picker.Item label='3' value={3} />
              <Picker.Item label='4' value={4} />
              <Picker.Item label='5' value={5} />
              <Picker.Item label='6' value={6} />
              <Picker.Item label='7' value={7} />
              <Picker.Item label='8' value={8} />
              <Picker.Item label='9' value={9} />
              <Picker.Item label='10' value={10} />
            </Picker>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.modalClosedContainer}
        onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.modalClosed}>
          <Text style={styles.modalClosedText}>
            Qty:{'  '}
            {quantity}
          </Text>
          <Icon size={28} name='keyboard-arrow-down' />
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    backgroundColor: 'rgba(100,100,100, 0.6)',
  },
  modalOpenContainer: {
    backgroundColor: 'white',
    width: Dimensions.get('screen').width * 0.45,
    borderRadius: 8,
    overflow: 'hidden',
    padding: 0,
    margin: 0,
  },
  modalOpenTopContainer: {
    paddingVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#f3f3f3',
  },
  modalOpenText: {
    fontFamily: 'poppins-bold',
    fontSize: 16,
  },
  modalClosedContainer: {
    width: '22.5%',
    backgroundColor: '#f3f3f3',
    borderColor: '#ccc',
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 10,
    alignSelf: 'flex-start',
  },
  modalClosed: {
    width: '100%',
    height: 32,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  modalClosedText: {
    fontFamily: 'poppins-regular',
    fontSize: 12,
  },
});

export default CustomModal;
