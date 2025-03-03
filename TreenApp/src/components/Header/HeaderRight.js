import React from 'react';
import { TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const HeaderRight = ({ navigation }) => (
    <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingHorizontal: 10 }}>
      <Feather name="x" size={24} color="black" />
    </TouchableOpacity>
);

export default HeaderRight;
