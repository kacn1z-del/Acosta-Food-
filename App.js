import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateOrderScreen from './screens/client/CreateOrderScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="CrearPedido" 
          component={CreateOrderScreen}
          options={{ title: 'Acosta-Food' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}