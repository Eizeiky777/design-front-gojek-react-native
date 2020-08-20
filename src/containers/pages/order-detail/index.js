import React, { Component } from 'react';
import {Text, View, Image, Button} from 'react-native';

// organism
import NavbarO from '../../organism/navbar-o';

class OrderDetail extends Component {
    render(){
        return(
            <>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Orders Detail</Text>
                </View>
                <NavbarO />
            </>
        )
    }
}


export default OrderDetail;