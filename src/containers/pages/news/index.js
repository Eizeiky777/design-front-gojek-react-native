import React, { Component } from 'react';
import {Text, View, Image, Button} from 'react-native';

// organism
import NavbarO from '../../organism/navbar-o';

class News extends Component {
    render(){
        return(
            <>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Hello World</Text>
                </View>
                <NavbarO />
            </>
        )
    }
}


export default News;