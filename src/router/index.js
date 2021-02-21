import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Profile, SignIn, SplashScreen } from '../pages';
import { BottomNavigator } from '../components';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props}/>} sceneContainerStyle={{backgroundColor: 'white'}}>
            <Tab.Screen 
                name='Home'
                component={Home}
            />
            <Tab.Screen 
                name='Profile'
                component={Profile}
            />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator
        initialRouteName='SignIn'
        >
            <Stack.Screen 
                name='SplashScreen'
                component={SplashScreen}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name='SignIn'
                component={SignIn}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name='MainApp'
                component={MainApp}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default Router


