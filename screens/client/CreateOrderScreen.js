import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { db } from '../../firebaseConfig'; // <-- Importa tu Firebase
import { collection, addDoc, getDocs, serverTimestamp } from 'firebase/firestore';

export default function CreateOrderScreen({ navigation }) {
  const [menu, setMenu] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Cargar menú desde Firestore al abrir la pantalla
  useEffect(() => {
    const cargarMenu = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "menu"));
        const items = querySnapshot.docs.map(doc => ({ 
          id: doc.id, 
          ...doc.data() 
        }));
        setMenu(items);
      } catch (error) {
        console.log("Error cargando menú:", error);
        Alert.alert("Error", "No se pudo cargar el menú");
      } finally {
        setLoading(false);
      }
    };
    cargarMenu();
  }, []);

  // 2. Agregar items al carrito
  const agregarAlCarrito = (item) => {
    setCarrito(prev => {
      const existe = prev.find(i => i.id === item.id);
      if (existe) {
        return prev.map(i => 
          i.id === item.id ? { ...i, cantidad: i.cantidad + 1 } : i
        );
      }
      return [...prev, { ...item, cantidad: 1 }];
    });
  };

  // 3. Confirmar pedido y guardar en Firestore
  const confirmarPedido = async () => {
    if (carrito.length === 0) {
      Alert.alert("Carrito vacío", "Agrega algo al carrito primero");
      return;
    }

    const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

    try {
      await addDoc(collection(db, "pedidos"), {
        items: carrito,
        total: total,
        estado: "pendiente",
        fecha: serverTimestamp(),
        clienteId: "anonimo", // Después le metes auth.uid
        restauranteId: "acosta-food"
      });
      
      Alert.alert("🎉 ¡Éxito!", "Tu pedido fue enviado al restaurante");
      setCarrito([]); // Limpia carrito
      navigation.navigate('Tracking'); // Te manda a seguimiento
    } catch (error) {
      console.log("Error al crear pedido:", error);
      Alert.alert("Error", "No se pudo enviar el pedido");
    }
  };

  if (loading) return <Text style={styles.loading}>Cargando menú...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menú Acosta Food</Text>
      
      <FlatList
        data={menu}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View>
              <Text style={styles.itemName}>{item.nombre}</Text>
              <Text style={styles.itemPrice}>₡{item.precio}</Text>
            </View>
            <TouchableOpacity 
              style={styles.addButton} 
              onPress={() => agregarAlCarrito(item)}
            >
              <Text style={styles.addButtonText}>Agregar</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.footer}>
        <Text style={styles.total}>
          Total: ₡{carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0)}
        </Text>
        <TouchableOpacity style={styles.confirmButton} onPress={confirmarPedido}>
          <Text style={styles.confirmText}>Confirmar Pedido ({carrito.length})</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  loading: { textAlign: 'center', marginTop: 50, fontSize: 18 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  item: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    padding: 16, 
    borderBottomWidth: 1, 
    borderColor: '#eee' 
  },
  itemName: { fontSize: 16, fontWeight: '500' },
  itemPrice: { fontSize: 14, color: '#666', marginTop: 4 },
  addButton: { backgroundColor: '#16a34a', padding: 10, borderRadius: 8 },
  addButtonText: { color: 'white', fontWeight: 'bold' },
  footer: { borderTopWidth: 1, borderColor: '#eee', paddingTop: 16 },
  total: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  confirmButton: { backgroundColor: '#15803d', padding: 16, borderRadius: 12 },
  confirmText: { color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold' }
});