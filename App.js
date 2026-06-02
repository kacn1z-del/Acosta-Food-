import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AdminDashboardScreen from './screens/admin/AdminDashboardScreen';
import CreateOrderScreen from './screens/client/CreateOrderScreen';
import DashboardScreen from './screens/restaurant/DashboardScreen';
import TrackingScreen from './screens/delivery/TrackingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Admin">
        <Stack.Screen 
          name="Admin" 
          component={AdminDashboardScreen}
          options={{ title: 'Súper Admin' }}
        />
        <Stack.Screen 
          name="Cliente" 
          component={CreateOrderScreen}
          options={{ title: 'Crear Pedido' }}
        />
        <Stack.Screen 
          name="Restaurante" 
          component={DashboardScreen}
          options={{ title: 'Panel Restaurante' }}
        />
        <Stack.Screen 
          name="Delivery" 
          component={TrackingScreen}
          options={{ title: 'Tracking' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}