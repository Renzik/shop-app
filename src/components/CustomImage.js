import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CustomIcon from '../components/CustomIcon';

import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';

const CustomImage = props => {
  console.log('props', props.source.uri);

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
    <View style={styles.imageContainer}>
      <View style={styles.shareIconContainer}>
        <CustomIcon onShare={onShare} imageUrl={props.source.uri} name={'share-alternative'} />
      </View>
      <Image style={styles.image} source={{ uri: props.source.uri }} />
    </View>
  );
};

export default CustomImage;

const styles = StyleSheet.create({
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
