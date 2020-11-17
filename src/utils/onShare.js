import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';

export default onShare = async (imageUrl, title) => {
  // console.log('titlee', title);
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
