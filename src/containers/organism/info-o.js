import React, { Component } from 'react';
import {Text, View, Image, Button} from 'react-native';

// Molecules
// import Navbar from '../../components/molecules/navbar';

class InformationO extends Component {

    render(){
        return (
            <>
            <View style={{marginBottom: 90, marginHorizontal: 10}}>
            <View style={{position: 'relative'}}>
                    <Image source={require('../../assets/logo/white.png')} 
                    style={{width: 70, height: 20, position: 'absolute', top: 30, left: 10, zIndex: 999 }} />
                    <View style={{width: 80, height: 35, position: 'absolute', top: 25, left: 7, backgroundColor: 'green', borderRadius: 6 }} ></View>
                </View>
            </View>
            <View style={{marginHorizontal: 15}}>
                    <Text style={{fontSize: 23, fontWeight: 'bold', marginBottom: 25}}>Complete your profile</Text>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Image source={require('../../assets/dummy/facebook-connect.png')} 
                        style={{width: 150, height: 90, marginRight: 15}}
                    />
                    <View style={{width: 200}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', paddingTop: 5}}>Connect with Facebook</Text>
                        <Text>Log in faster without verification code</Text>
                    </View>
                    </View>
                    <View style={{alignSelf: 'flex-end', paddingVertical: 10}}>
                    <Button title={'CONNECT'} color="green" />
                    </View>
            </View>
            </>
        );
    }
}

export default InformationO