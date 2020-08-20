import React, { Component } from 'react';
import { View } from 'react-native';

// Molecules
import MainFeature from '../../components/molecules/main-feature';

class MainFeatureO extends Component {

    render(){
        return (
            <View style={{flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 0, marginTop: 25}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 18, width: '100%' }}>
                <MainFeature title='GO-RIDE' img={require('../../assets/icon/go-ride.png')} />
                <MainFeature title='GO-CAR' img={require('../../assets/icon/go-car.png')} />
                <MainFeature title='GO-BIRD' img={require('../../assets/icon/go-bluebird.png')} />
                <MainFeature title='GO-FOOD' img={require('../../assets/icon/go-food.png')} />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 18, width: '100%' }}>
                <MainFeature title='GO-PULSA' img={require('../../assets/icon/go-pulsa.png')} />
                <MainFeature title='GO-SEND' img={require('../../assets/icon/go-send.png')} />
                <MainFeature title='GO-DEALS' img={require('../../assets/icon/go-deals.png')} />
                <MainFeature title='MORE' img={require('../../assets/icon/go-more.png')} />
            </View>
            </View>
        );
    }
}

export default MainFeatureO