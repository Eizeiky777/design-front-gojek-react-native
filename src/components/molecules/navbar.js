import React from 'react';
import {Text, View, Image, TouchableOpacity } from 'react-native';

function Navbar ({title, img, setChoosen, val}) {
    
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{ backgroundColor: 'white'}} >
                <TouchableOpacity onPress={
                    setChoosen
                }>
                    <Image source={img} height={26} width={26} />
                </TouchableOpacity>
            </View>
            <Text style={{fontSize: 10, color: val ? 'green' : 'gray', marginTop: 4}}>{title}</Text>
        </View>
    );
}

export default Navbar;