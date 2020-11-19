import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';

const CustomModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  let TouchableComponent = TouchableOpacity;

  if (Platform.OS === 'android') TouchableComponent = TouchableNativeFeedback;

  const onSelect = option => {
    setQuantity(option);
    setModalVisible(false);
  };

  const optionHandler = option => {
    return option !== quantity ? (
      <View style={styles.modalOptionsContainer} key={option}>
        <Text onPress={() => onSelect(option)} style={styles.modalOption}>
          {option}
        </Text>
      </View>
    ) : (
      <View style={styles.modalOptionSelected} key={option}>
        <Text onPress={() => onSelect(option)} style={styles.modalOption}>
          {option}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Modal transparent={true} visible={modalVisible} animationType='fade'>
        <TouchableWithoutFeedback onPress={setModalVisible.bind(this, false)}>
          <View style={{ ...styles.innerContainer, ...styles.container }}>
            <View style={styles.modalOpenContainer}>
              <View style={styles.modalOpenTopContainer}>
                <Text style={styles.modalOpenTitle}>Qty:</Text>
                <Icon
                  size={22}
                  name='close'
                  color='grey'
                  onPress={() => setModalVisible(!modalVisible)}
                />
              </View>
              <ScrollView persistentScrollbar={true}>
                {options.map(option => optionHandler(option))}
              </ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* MODAL BUTTON BELOW */}
      <TouchableComponent onPress={() => setModalVisible(!modalVisible)}>
        <View style={styles.modalClosedContainer}>
          <View style={styles.modalClosed}>
            <Text style={styles.modalClosedText}>
              Qty:{'  '}
              {quantity}
            </Text>
            <Icon size={28} name='keyboard-arrow-down' />
          </View>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  innerContainer: {
    backgroundColor: 'rgba(100,100,100, 0.6)',
  },
  modalOpenContainer: {
    width: Dimensions.get('screen').width * 0.42,
    height: '63%',
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  modalOpenTopContainer: {
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#f3f3f3',
  },
  modalOpenTitle: {
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
  modalOptionsContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#f3f3f3',
    borderColor: '#f3f3f3',
    paddingLeft: 15,
  },
  modalOption: {
    fontFamily: 'poppins-regular',
    paddingVertical: 10,
    fontSize: 16,
  },
  modalOptionSelected: {
    backgroundColor: '#ff9800a8',
    borderWidth: 1,
    borderColor: '#ff9800',
    borderLeftWidth: 5,
    borderLeftColor: '#ff9800',
    paddingLeft: 10,
  },
});

export default CustomModal;
