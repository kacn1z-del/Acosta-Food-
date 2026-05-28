import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

export default function AdminDashboardScreen() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "orders"), (snapshot) => {
      setOrders(snapshot.docs.map(doc => doc.data()));
    });
    return () => unsub();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text>Panel Admin – Pedidos activos:</Text>
      {orders.map((order, idx) => (
        <Text key={idx}>{order.clientId} → {order.status}</Text>
      ))}
    </View>
  );
}
