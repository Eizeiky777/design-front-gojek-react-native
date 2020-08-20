import React, { Component } from 'react';
import {Text, View, Image, Button} from 'react-native';

// organism
import NavbarO from '../../organism/navbar-o';

class Orders extends Component {
    render(){
        return(
            <>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title={'Go to order details'} color="green"  />
                </View>
                <NavbarO />
            </>
        )
    }
}


export default Orders;