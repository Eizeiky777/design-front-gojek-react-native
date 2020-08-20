import React from 'react';
import {Text, View, Image } from 'react-native';

export default function GoPay({title, img}) {
    
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={img} />
            <Text style={{fontWeight: 'bold', fontSize: 13, color: '#fff', marginTop: 15}}>{title}</Text>
        </View>
    );
}