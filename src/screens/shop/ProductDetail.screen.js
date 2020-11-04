import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';

import CustomIcon from '../../components/CustomIcon';
import { Icon } from 'react-native-elements';
import SearchBar from '../../components/SearchBar';

const ProductDetail = ({ navigation }) => {
  const itemId = navigation.getParam('itemId');

  const { title, imageUrl } = useSelector(state =>
    state.products.availableProducts.find(item => item.id === itemId)
  );

  const onShare = async imageUrl => {
    const fileDetails = {
      fileExtension: '.jpg',
      shareOptions: {
        mimeType: 'image/jpeg',
        dialogTitle: 'Share the image',
        UTI: 'image/jpeg',
      },
    };

    const localUrl = await FileSystem.downloadAsync(
      imageUrl,
      FileSystem.documentDirectory + `${title.split(' ').join('-')}${fileDetails.fileExtension}`
    );

    Sharing.shareAsync(localUrl.uri, fileDetails.shareOptions)
      .then(data => console.log('shared!'))
      .catch(err => console.log('ERRRRROR!'));
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.topTextContainer}>
          <Text onPress={() => console.log('123')}>Visit Brand Store</Text>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.imageContainer}>
            <View style={styles.shareIconContainer}>
              <CustomIcon onShare={onShare} imageUrl={imageUrl} name={'share-alternative'} />
            </View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
          </View>
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
    headerRight: () => <SearchBar navigation={navigation} />,
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
  imageContainer: {
    alignSelf: 'center',
    width: 350,
    height: 350,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  shareIconContainer: {
    position: 'absolute',
    right: '-5%',
    zIndex: 99,
  },
});

export default ProductDetail;
