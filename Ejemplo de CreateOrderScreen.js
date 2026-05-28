import React, { useState } from 'react';

import {
  View,
  Button,
  Alert
} from 'react-native';

import MapView, {
  Marker
} from 'react-native-maps';

import {
  collection,
  addDoc
} from "firebase/firestore";

import { db } from "../../services/firebaseConfig";

export default function CreateOrderScreen() {

  const [location] = useState({
    lat: 9.9,
    lng: -84.1
  });

  async function createOrder() {

    try {

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
        "Pedido enviado correctamente"
      );

    } catch (error) {

      console.log(error);

      Alert.alert(
        "Error",
        "No se pudo crear el pedido"
      );

    }

  }

  return (

    <View style={{ flex: 1 }}>

      <MapView
        style={{ flex: 1 }}
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

      <Button
        title="Crear Pedido"
        onPress={createOrder}
      />

    </View>

  );

}