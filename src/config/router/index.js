import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// pages
import { Home, News, Orders, OrderDetail } from '../../containers/pages';

const Stack = createStackNavigator();

function Router() {
        return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{
                    gestureEnabled: true,
                    headerStyle: {
                        backgroundColor: '#101010'
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                    headerTintColor: '#ffd700'
                }}
            >
                <Stack.Screen name="Home" component={Home} 
                    options={{
                        headerShown: false,
                    }}    
                />
                <Stack.Screen name="News" component={News} 
                    options={{
                        headerShown: false,
                    }}  
                />
                <Stack.Screen name="Orders" component={Orders} 
                    options={{
                        headerShown: false,
                    }}  
                />
                <Stack.Screen name="OrderDetail" component={OrderDetail} 
                    options={{
                        headerShown: false,
                    }}  
                />
            </Stack.Navigator>
        </NavigationContainer>
        );
    }
    
export default Router;