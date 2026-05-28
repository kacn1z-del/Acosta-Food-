import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

import {
  collection,
  onSnapshot
} from "firebase/firestore";

import { db } from "../../services/firebaseConfig";

export default function AdminDashboardScreen() {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const unsubscribe = onSnapshot(
      collection(db, "orders"),
      (snapshot) => {

        const ordersData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setOrders(ordersData);
        setLoading(false);
      },
      (error) => {
        console.log("Error obteniendo pedidos:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();

  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Cargando pedidos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Panel Admin – Pedidos Activos
      </Text>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.client}>
              Cliente: {item.clientId}
            </Text>

            <Text>
              Estado: {item.status}
            </Text>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20
  },

  card: {
    padding: 15,
    marginBottom: 12,
    borderRadius: 10,
    backgroundColor: '#f2f2f2'
  },

  client: {
    fontWeight: 'bold'
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});