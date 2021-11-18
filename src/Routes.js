import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './pages/Home';
import Profile from './pages/Profile';

const Tab = createBottomTabNavigator();

const Routes = () => {
    
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName;
             
                    switch(route.name){
                        case 'Home':   
                            iconName = 'home';
                            break;
                        case 'Perfil':
                            iconName = 'person';
                            break;
                        default:
                            route.name;
                    }
                 
                    return <Ionicons name={iconName} size={30} color={color} />;
                },
                tabBarActiveTintColor: '#FF5E13',
                tabBarInactiveTintColor: '#ffffff',
                tabBarStyle: { backgroundColor: '#272727', height: 60 },
                tabBarLabelStyle: { fontSize: 14, fontWeight: '700' },
                tabBarHideOnKeyboard: true
            })}
        >
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{ headerShown: false }} 
            />
            <Tab.Screen 
                name="Perfil" 
                component={Profile} 
                options={{ headerShown: false }} 
            />
      </Tab.Navigator>
    )
}

export default Routes