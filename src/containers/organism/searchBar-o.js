import React, { Component } from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

class SearchBarO extends Component {

    render(){
        return (
            <View style={{marginHorizontal: 17, flexDirection: 'row', marginTop: 10}}>
                <View style={{flex: 1, marginRight: 18}}>
                    <TextInput placeholder="hello what's up ?" style={styles.inputHeader} />
                    <Image source={require('../../assets/icon/search.png')} height={26} width={26} 
                        style={{ position: "absolute", top: 5, left: 12 }}>
                    </Image>
                </View>
                <View style={{width: 35}}>
                    <Image source={require('../../assets/icon/promo.png')} 
                        style={{alignItems: 'center', justifyContent: 'center', height: 40, width: 35}}>
                    </Image>
                </View>
            </View>
        );
    }
}

// styling 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative"
    },
        inputHeader : {
        borderWidth: 1, borderRadius: 25, borderColor: 'gray', height: 40, fontSize: 13, color: '#fff',
        paddingLeft: 45, paddingRight: 20, backgroundColor: '#fff'
    },
        containerMenu:{
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },

});

export default SearchBarO;