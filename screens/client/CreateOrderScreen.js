import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';

export default function CreateOrderScreen() {
  const [cliente, setCliente] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [pedido, setPedido] = useState('');

  const enviarPedido = () => {
    if (!cliente || !telefono || !direccion || !pedido) {
      Alert.alert('Error', 'Completa todos los campos');
      return;
    }
    Alert.alert('¡Éxito!', 'Pedido enviado correctamente');
    setCliente('');
    setTelefono('');
    setDireccion('');
    setPedido('');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Crear Nuevo Pedido</Text>
      
      <Text style={styles.label}>Nombre del Cliente</Text>
      <TextInput
        style={styles.input}
        value={cliente}
        onChangeText={setCliente}
        placeholder="Ej: Juan Pérez"
      />

      <Text style={styles.label}>Teléfono</Text>
      <TextInput
        style={styles.input}
        value={telefono}
        onChangeText={setTelefono}
        placeholder="Ej: 8888-8888"
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Dirección de Entrega</Text>
      <TextInput
        style={styles.input}
        value={direccion}
        onChangeText={setDireccion}
        placeholder="Ej: 100m norte del parque"
      />

      <Text style={styles.label}>Descripción del Pedido</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={pedido}
        onChangeText={setPedido}
        placeholder="Ej: 2 Hamburguesas, 1 Coca-Cola"
        multiline
      />

      <TouchableOpacity style={styles.boton} onPress={enviarPedido}>
        <Text style={styles.botonTexto}>ENVIAR PEDIDO</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  label: { fontSize: 16, fontWeight: '600', marginTop: 10, marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 12, borderRadius: 8, fontSize: 16 },
  textArea: { height: 100, textAlignVertical: 'top' },
  boton: { backgroundColor: '#FF6B00', padding: 15, borderRadius: 8, marginTop: 20, marginBottom: 40 },
  botonTexto: { color: '#fff', textAlign: 'center', fontSize: 18, fontWeight: 'bold' },
});