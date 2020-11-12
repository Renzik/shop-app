import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { SliderBox } from 'react-native-image-slider-box';
import { Icon } from 'react-native-elements';

import Theme from '../../../constants/Theme';

import CustomImage from '../../components/CustomImage';
import SearchBar from '../../components/SearchBar';

const ProductDetail = ({ navigation }) => {
  const itemId = navigation.getParam('itemId');

  const { title, images, description, price } = useSelector(state =>
    state.products.availableProducts.find(item => item.id === itemId)
  );

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.topTextContainer}>
          <Text onPress={() => console.log('123')}>Visit Brand Store</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      <SliderBox
        imageLoadingColor='#2196F3'
        dotColor={Theme.orange}
        circleLoop
        inactiveDotColor='#90A4AE'
        dotStyle={styles.sliderDotStyles}
        ImageComponent={CustomImage}
        images={images}
        title={title}
      />
      <View style={styles.middleContainer}>
        <View style={styles.pricingContainer}>
          <Text>$</Text>
          <Text>{price}</Text>
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
    backgroundColor: 'white',
  },
  topTextContainer: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginTop: 5,
  },
  title: {
    color: '#555',
    paddingTop: 4,
    paddingBottom: 10,
  },
  sliderDotStyles: {
    width: 15,
    height: 15,
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: Theme.orange,
  },
  middleContainer: {
    paddingHorizontal: 15,
    marginVertical: 20,
  },
  pricingContainer: {
    flexDirection: 'row',
  },
});

export default ProductDetail;
