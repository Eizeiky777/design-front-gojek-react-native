import React, { Component } from 'react';
import {Text, View, Image, TouchableOpacity } from 'react-native';

// Molecules
import Navbar from '../../components/molecules/navbar';

class NavbarO extends Component {

    constructor(props) {
        super(props);
        this.state = {
            choosen: {
                first: false,
                second: false,
                third: false,
                fourth: false
            },
            val: true,
            homeActive: require(`../../assets/icon/home-active.png`),
            home: require(`../../assets/icon/home.png`),
            orderActive: require(`../../assets/icon/order-active.png`),
            order: require(`../../assets/icon/order.png`),
            helpActive: require('../../assets/icon/help-active.png'),
            help: require('../../assets/icon/help.png'),
            accountActive: require('../../assets/icon/account-active.png'),
            account: require('../../assets/icon/account.png')
        };
    }

    setChoosen(e){
        if ( e === 'home' ) 
            this.setState({choosen: {first: !this.state.choosen.first}})
        else if ( e === 'order' ) 
            this.setState({choosen: {second: !this.state.choosen.second}})
        else if ( e === 'help' ) 
            this.setState({choosen: {third: !this.state.choosen.third}})
        else if ( e === 'account' ) 
            this.setState({choosen: {fourth: !this.state.choosen.fourth}})
    }
    
    render(){
        let first = this.state.choosen.first;
        let second = this.state.choosen.second;
        let third = this.state.choosen.third;
        let fourth = this.state.choosen.fourth;
        
        return (
            <View style={{ height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
                <Navbar title='Home'    
                    img={first  ? this.state.homeActive : this.state.home} 
                    setChoosen={() => this.setChoosen('home')} val={first} />
                <Navbar title='Orders'  
                    img={second ? this.state.orderActive : this.state.order } 
                    setChoosen={this.props.Orders} val={second}   
                    />
                <Navbar title='Help'    
                    img={third  ? this.state.helpActive : this.state.help }  
                    setChoosen={() => this.setChoosen('help')} val={third}     />
                <Navbar title='Account' 
                    img={fourth ? this.state.accountActive : this.state.account }
                    setChoosen={() => this.setChoosen('account')} val={fourth} />
            </View>
        );
    }
}

export default NavbarO;