import React, { Component } from 'react';
import {Text, View, Image, Button} from 'react-native';

// Molecules
// import Navbar from '../../components/molecules/navbar';

class NewsO extends Component {

    render(){
        return (
            <View>
                <View style={{paddingTop: 20, marginHorizontal: 17, position: 'relative'}}>
                <Image source={require('../../assets/dummy/sepak-bola.jpg')} 
                    style={{height: 200, width: '100%', borderRadius: 7, borderWidth: 1, borderColor: 'gray'}} />
                <Image source={require('../../assets/logo/white.png')} 
                    style={{width: 70, height: 20, position: 'absolute', top: 30, left: 10, zIndex: 999 }} />
                <View style={{width: 80, height: 25, position: 'absolute', top: 30, left: 7, backgroundColor: '#69666650', borderRadius: 6 }} ></View>
                </View>
                <View style={{paddingTop: 20, marginHorizontal: 17, paddingBottom: 20}}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>GO-NEWS</Text>
                    <Text>Gol pertama timnas Indonesia !</Text>
                    <View style={{alignSelf: 'flex-end', width: 90, paddingTop: 10 }}>
                        <Button title={'READ'} color="green" onPress={this.props.onPress} />
                    </View>
                </View>
            </View>
        );
    }
}

export default NewsO