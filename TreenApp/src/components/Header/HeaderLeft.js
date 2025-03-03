// HeaderLeft.js
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // 사용한 아이콘에 맞게 수정

const HeaderLeft = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingHorizontal: 10 }}>
    <Icon name="arrow-back" size={24} color="black" />
  </TouchableOpacity>
);

export default HeaderLeft;
