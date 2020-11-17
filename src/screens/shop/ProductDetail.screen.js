import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { SliderBox } from 'react-native-image-slider-box';
import { Icon } from 'react-native-elements';
import CustomIcon from '../../components/CustomIcon';

import Theme from '../../../constants/Theme';

import CustomImage from '../../components/CustomImage';
import SearchBar from '../../components/SearchBar';
import CustomPrice from '../../components/CustomPrice';
import onShare from '../../utils/onShare';

const ProductDetail = ({ navigation }) => {
  const itemId = navigation.getParam('itemId');
  const [currImageIdx, setCurrImageIdx] = useState(0);

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
      <View style={{ ...styles.imageContainer }}>
        <SliderBox
          imageLoadingColor='#2196F3'
          dotColor='#999999'
          circleLoop
          inactiveDotColor='#e3e3e3'
          dotStyle={styles.sliderDotStyles}
          currentImageEmitter={idx => setCurrImageIdx(idx)}
          images={images}
          title={title}
          sliderBoxHeight={350}
          parentWidth={Dimensions.get('screen').width * 0.9}
        />
        <View style={styles.shareIconContainer}>
          <CustomIcon
            style={styles.customIcon}
            onShare={onShare}
            title={title}
            imageUrl={images[currImageIdx]}
            name='share-alternative'
          />
        </View>
      </View>
      <View style={styles.middleContainer}>
        <CustomPrice
          price={price}
          dollarStyles={{ fontSize: 28 }}
          dollarSignStyles={{ fontSize: 12, paddingHorizontal: 2, paddingVertical: 4 }}
          centsStyles={{ paddingVertical: 4 }}
        />
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
    width: 10,
    height: 10,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#999999',
    top: '350%',
  },
  middleContainer: {
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  pricingContainer: {
    flexDirection: 'row',
  },
  shareIconContainer: {
    position: 'absolute',
    right: 3.5,
    zIndex: 99,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default ProductDetail;
