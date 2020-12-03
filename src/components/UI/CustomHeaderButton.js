import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { AntDesign } from '@expo/vector-icons';

const CustomHeaderButton = props => (
  <HeaderButton {...props} IconComponent={AntDesign} iconSize={23} color='black' />
);

const styles = StyleSheet.create({});

export default CustomHeaderButton;
