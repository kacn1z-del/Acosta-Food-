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
      <Stack.Navigator initialRouteName="CreateOrder">
        <Stack.Screen 
          name="CreateOrder" 
          component={CreateOrderScreen}
          options={{ title: 'Crear Pedido' }} 
        />
        <Stack.Screen 
          name="Admin" 
          component={AdminDashboardScreen}
          options={{ title: 'Súper Admin' }} 
        />
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen}
          options={{ title: 'Restaurante' }} 
        />
        <Stack.Screen 
          name="Tracking" 
          component={TrackingScreen}
          options={{ title: 'Seguimiento' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}