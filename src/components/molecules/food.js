import React from 'react';
import {Text, View, Image } from 'react-native';

export default function FoodItem ({title, img}) {
    return (
        <View style={{marginRight: 25}}>
            <Image source={img}
                style={{width: 150, height: 150, borderRadius: 7, marginBottom: 10,}}  />
            <Text style={{fontSize: 18, fontWeight: 'bold', width: 150}}>{title}</Text>
        </View>
    );
}