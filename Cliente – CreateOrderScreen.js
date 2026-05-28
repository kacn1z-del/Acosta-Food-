import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';

import {
  collection,
  addDoc
} from "firebase/firestore";

import { db } from "../../services/firebaseConfig";

export default function CreateOrderScreen() {

  const [loading, setLoading] = useState(false);

  const [location] = useState({
    lat: 9.9,
    lng: -84.1
  });

  async function createOrder() {

    try {

      setLoading(true);

      await addDoc(collection(db, "orders"), {

        clientId: "user123",
        restaurantId: "rest456",

        status: "pending",

        location: {
          lat: location.lat,
          lng: location.lng
        },

        createdAt: Date.now()

      });

      Alert.alert(
        "Pedido creado",
        "Tu pedido fue enviado correctamente."
      );

    } catch (error) {

      console.log(error);

      Alert.alert(
        "Error",
        "No se pudo crear el pedido."
      );

    } finally {

      setLoading(false);

    }
  }

  return (

    <View style={styles.container}>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05
        }}
      >

        <Marker
          coordinate={{
            latitude: location.lat,
            longitude: location.lng
          }}
          title="Cliente"
        />

      </MapView>

      <View style={styles.bottomPanel}>

        {loading ? (

          <ActivityIndicator size="large" />

        ) : (

          <TouchableOpacity
            style={styles.button}
            onPress={createOrder}
          >

            <Text style={styles.buttonText}>
              Crear Pedido
            </Text>

          </TouchableOpacity>

        )}

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

  bottomPanel: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20
  },

  button: {
    backgroundColor: '#ff6600',
    padding: 18,
    borderRadius: 14,
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }

});