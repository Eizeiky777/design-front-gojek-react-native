import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

// Molecules
import GoPay from '../../components/molecules/gopay';

class GoPayO extends Component {

    render(){
        return (
            <View style={{marginHorizontal: 17, top: 9, backgroundColor: 'blue'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', 
                    backgroundColor: 'blue', borderTopLeftRadius: 4, borderTopRightRadius: 4, 
                    padding: 14}}>
                    <Image source={require('../../assets/icon/gopay.png')} />
                    <Text style={{fontWeight: "bold", fontSize: 17, color: '#fff'}} >Rp 50.000</Text>
                </View>
                <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 14, 
                    backgroundColor: "#1a1aff", borderBottomRightRadius: 4, borderBottomLeftRadius: 4}}>
                    <GoPay title='Pay' img={require('../../assets/icon/pay.png')}  />
                    <GoPay title='Nearby' img={require('../../assets/icon/nearby.png')}  />
                    <GoPay title='Top Up' img={require('../../assets/icon/topup.png')}  />
                    <GoPay title='More' img={require('../../assets/icon/more.png')}  />
                </View>
            </View>
        );
    }
}

export default GoPayO