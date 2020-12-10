import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SliderBox } from 'react-native-image-slider-box';
import { Icon } from 'react-native-elements';

import CustomIcon from '../../components/CustomIcon';
import SearchBar from '../../components/SearchBar';
import CustomPrice from '../../components/CustomPrice';
import onShare from '../../utils/onShare';
import CustomModal from '../../components/CustomModal';
import CustomButton from '../../components/ProductDetail/CustomButton';
import SimilarItem from '../../components/ProductDetail/SimilarItem';

import { addToCart } from '../../redux/actions/cart.actions';

const ProductDetail = ({ navigation }) => {
  const itemId = navigation.getParam('itemId');
  const [currImageIdx, setCurrImageIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const item = useSelector(state =>
    state.products.availableProducts.find(item => item.id === itemId)
  );

  if (item === undefined)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>The item has been deleted by the owner</Text>
      </View>
    );

  const dispatch = useDispatch();

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.topTextContainer}>
          <Text onPress={() => console.log('123')}>Visit Brand Store</Text>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <SliderBox
          imageLoadingColor='#2196F3'
          dotColor='#999999'
          circleLoop
          inactiveDotColor='#e3e3e3'
          dotStyle={styles.sliderDotStyles}
          currentImageEmitter={idx => setCurrImageIdx(idx)}
          images={item.images}
          title={item.title}
          sliderBoxHeight={350}
          parentWidth={Dimensions.get('screen').width * 0.9}
        />
        <View style={styles.shareIconContainer}>
          <CustomIcon
            style={styles.customIcon}
            onShare={onShare}
            title={item.title}
            imageUrl={item.images[currImageIdx]}
            name='share-alternative'
          />
        </View>
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.description}>{item.description}</Text>

        <CustomPrice
          price={item.price}
          dollarStyles={{ fontSize: 28 }}
          dollarSignStyles={{ fontSize: 12, paddingHorizontal: 2, paddingVertical: 4 }}
          centsStyles={{ paddingVertical: 4 }}
        />
        <CustomModal quantity={quantity} setQuantity={setQuantity} />
        <CustomButton
          onPress={() => {
            dispatch(addToCart(item, quantity));
            setQuantity(1);
          }}
          style={styles.addToCart}>
          Add to Cart
        </CustomButton>
        <CustomButton onPress={() => console.log('BUY NOW')} style={styles.buyNow}>
          Buy Now
        </CustomButton>
      </View>
      <View style={styles.bottomContainer}>
        <SimilarItem itemId={itemId} navigation={navigation} />
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
  addToCart: {
    backgroundColor: '#FFBC47',
    marginTop: 10,
  },
  buyNow: {
    backgroundColor: '#FF9C1D',
    marginVertical: 12,
  },
  descriptionTitle: {
    fontFamily: 'poppins-bold',
    fontSize: 18,
  },
  description: {
    marginVertical: 10,
    fontFamily: 'poppins-regular',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  text: {
    color: '#666',
    fontSize: 15,
    fontFamily: 'poppins-regular',
  },
});

export default ProductDetail;
