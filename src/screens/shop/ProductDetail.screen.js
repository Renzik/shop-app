import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { SliderBox } from 'react-native-image-slider-box';
import { Icon } from 'react-native-elements';

import CustomImage from '../../components/CustomImage';
import SearchBar from '../../components/SearchBar';

const ProductDetail = ({ navigation }) => {
  const itemId = navigation.getParam('itemId');

  const { title, images, description } = useSelector(state =>
    state.products.availableProducts.find(item => item.id === itemId)
  );

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.topTextContainer}>
          <Text onPress={() => console.log('123')}>Visit Brand Store</Text>
          <Text style={styles.title}>{title}</Text>
          <SliderBox ImageComponent={CustomImage} images={images} />
        </View>
      </View>
    </ScrollView>
  );
};

ProductDetail.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: () => (
      <Icon
        containerStyle={{ paddingHorizontal: 15 }}
        name='arrow-back'
        onPress={() => {
          navigation.goBack();
        }}
      />
    ),
    headerRight: () => (
      <SearchBar style={{ width: Dimensions.get('screen').width * 0.85 }} navigation={navigation} />
    ),
  };
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  topContainer: {
    height: Dimensions.get('screen').height,
  },
  topTextContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  title: {
    color: '#555',
    paddingTop: 3,
    paddingBottom: 10,
  },
});

export default ProductDetail;
