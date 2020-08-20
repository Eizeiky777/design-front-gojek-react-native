import React from 'react';
import {Text, View, Image } from 'react-native';

export default function MainFeature({title, img}) {
    
    return (
        <View style={{ width: '25%', alignItems: 'center'}}>
            <View style={{width: 58, height: 58, borderWidth: 1, borderColor: 'gray', borderRadius: 18, 
            alignItems: 'center', justifyContent: 'center', marginBottom: 6
            }}>
                <Image source={img} />
            </View>
            <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 15}}>{title}</Text>
        </View>
    );
}