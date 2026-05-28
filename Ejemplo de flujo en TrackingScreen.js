import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

import MapView, {
  Marker
} from 'react-native-maps';

import {
  doc,
  onSnapshot
} from "firebase/firestore";

import { db } from "../../services/firebaseConfig";

export default function TrackingScreen() {

  const [order, setOrder] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const unsubscribe = onSnapshot(

      doc(db, "orders", "order123"),

      (snapshot) => {

        if (snapshot.exists()) {

          setOrder(snapshot.data());

        }

        setLoading(false);

      },

      (error) => {

        console.log(error);

        setLoading(false);

      }

    );

    return () => unsubscribe();

  }, []);

  if (loading) {

    return (

      <View style={styles.center}>

        <ActivityIndicator size="large" />

        <Text>Cargando seguimiento...</Text>

      </View>

    );

  }

  if (!order) {

    return (

      <View style={styles.center}>

        <Text>No hay pedido activo</Text>

      </View>

    );

  }

  return (

    <View style={styles.container}>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: order.location.lat,
          longitude: order.location.lng,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05
        }}
      >

        <Marker
          coordinate={{
            latitude: order.location.lat,
            longitude: order.location.lng
          }}
          title="Cliente"
          description={`Estado: ${order.status}`}
        />

      </MapView>

      <View style={styles.infoBox}>

        <Text style={styles.title}>
          Seguimiento del Pedido
        </Text>

        <Text>
          Estado: {order.status}
        </Text>

        <Text>
          Cliente: {order.clientId}
        </Text>

      </View>

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1
  },

  map: {
    flex: 1
  },

  infoBox: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 14
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});