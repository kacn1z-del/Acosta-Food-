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

export default function DashboardScreen() {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const unsub = onSnapshot(
      collection(db, "orders"),
      (snapshot) => {

        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setOrders(data);
        setLoading(false);
      },
      (error) => {
        console.log(error);
        setLoading(false);
      }
    );

    return () => unsub();

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
        Pedidos recibidos
      </Text>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.text}>
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
    padding: 20
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15
  },

  card: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10
  },

  text: {
    fontWeight: 'bold'
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});