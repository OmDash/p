import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Todo from "../screens/ToDoScreen";
import Forms from "../screens/FormsScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Todo') {
                        iconName = focused
                            ? 'book'
                            : 'book-outline';
                    } else if (route.name === 'Forms') {
                        iconName = focused ? 'create' : 'create-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Todo" component={Todo} options={{headerShown:false}}/>
            <Tab.Screen name="Forms" component={Forms} options={{headerShown:false}}/>
        </Tab.Navigator>
    );
}

export default BottomTabNavigator