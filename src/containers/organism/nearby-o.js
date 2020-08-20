import React, { Component } from 'react';
import {Text, View, Image, FlatList } from 'react-native';

// Molecules
import FoodItem from '../../components/molecules/food';

// json data
import { Menu } from '../../assets/gojekFood';

class NearbyO extends Component {

    render(){

        return (
            <View style={{marginHorizontal: 15, marginVertical: 10}}>
                <Image source={require('../../assets/logo/go-food.png')} 
                    style={{width: 100, height: 20, borderRadius: 7, marginBottom: 15}}  />
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
                <Text style={{fontSize: 20, fontWeight: 'bold',}}>
                    Nearby Restaurant
                </Text>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: 'green'}}>
                    See All
                </Text>
                </View>
                <View style={{marginTop: 15, display: 'flex', flexDirection: 'row'}}>
                    <FlatList 
                        data={Menu}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                        <View>
                            <FoodItem title={item.name} img={item.img}/> 
                        </View> 
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            </View>
        );
    }
}

export default NearbyO;