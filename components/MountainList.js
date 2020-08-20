/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView } from 'react-native';
import MountainItem from './MountainItem'

const MountainList = (props) => {
    const { mt, navigation } = props
    console.log(mt)

  return (
    <SafeAreaView>
        {mt.map((item, index) => <MountainItem key={index} item={item}/>)}
    </SafeAreaView>
  );
};

export default MountainList;

