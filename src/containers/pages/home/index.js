// import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';

// organism
import NavbarO from '../../organism/navbar-o';
import NearbyO from '../../organism/nearby-o';
import FoodBannerO from '../../organism/foodBanner-o';
import InformationO from '../../organism/info-o';
import NewsO from '../../organism/news-o';
import MainFeatureO from '../../organism/mainFeature-o';
import GoPayO from '../../organism/gopay-o';
import SearchBarO from '../../organism/searchBar-o';

import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button } from 'react-native';

class Home extends Component {

    render(){
        return (
            <View style={styles.container}>
            <ScrollView style={{backgroundColor: '#FFF', flex: 1, top: 30, marginBottom: 40}}>
                {/* Section SearchbarTop */} 
                <SearchBarO />
                {/* Section gopay */} 
                <GoPayO />
                {/* Main Feature */} 
                <MainFeatureO />
                <View style={{backgroundColor: '#dbdbdb', height: 17, marginTop: 20 }} ></View>
                {/* News Section */} 
                <NewsO onPress={() => this.props.navigation.navigate('News')}/>
                <View style={{backgroundColor: '#dbdbdb', height: 2, marginTop: 20 }} ></View>
                {/* Internal information */} 
                <InformationO />
                <View style={{backgroundColor: '#dbdbdb', height: 2, marginTop: 20 }} ></View>
                {/* Go Food banner section */} 
                <FoodBannerO />
                {/* Nearby Go food */} 
                <NearbyO/>
            </ScrollView>
            {/* Section bar */} 
            <NavbarO 
                Home={() => this.props.navigation.navigate('Home')}
                Orders={() => this.props.navigation.navigate('Orders')}
                OrderDetail={() => this.props.navigation.navigate('OrderDetail')}
            />
            </View>
        );
    }
}

// styling 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative"
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    inputHeader : {
        borderWidth: 1, borderRadius: 25, borderColor: 'gray', height: 40, fontSize: 13, color: '#fff',
        paddingLeft: 45, paddingRight: 20, backgroundColor: '#fff'
    },
    containerMenu:{
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
});


export default Home;