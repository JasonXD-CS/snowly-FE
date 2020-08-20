import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen'
import DetailScreen from './components/DetailView/DetailScreen'
import ForecastScreen from './components/ForecastView/ForecastScreen'

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Snowly'}}/>
                <Stack.Screen name="Details" component={DetailScreen} />
                <Stack.Screen name="Forecast" component={ForecastScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;