
import React, { Component } from 'react';
import {Text, View, Image, Button} from 'react-native';

// Molecules
// import Navbar from '../../components/molecules/navbar';

class FoodBannerO extends Component {

    render(){
        return (
            <View style={{padding: 16 }}>
                <View style={{position: 'relative'}}>
                    <Image source={require('../../assets/dummy/food-banner.jpg')} 
                        style={{width: '100%', height: 200, borderRadius: 7}}  />
                    <Image source={require('../../assets/logo/go-food.png')} 
                    style={{width: 90, height: 20, position: 'absolute', top: 30, left: 10,  }} />
                    <View 
                        style={{position: 'absolute', zIndex: 999, bottom: 0, left: 5, 
                        width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View>
                            <Text style={{fontWeight: 'bold', fontSize: 20, color: '#fff'}}>Free GO-FOOD Voucher !</Text>
                            <Text>Quick, before out of stock !</Text>
                        </View>
                        <View style={{ padding: 10}}>
                            <Button title={'GET VOUCHER'} color="green"/>
                        </View>
                    </View>
                    <View style={{position: 'absolute', backgroundColor: '#000000', height: 200, width: '100%', opacity: 0.2}}></View>
                </View>
            </View>
        );
    }
}

export default FoodBannerO