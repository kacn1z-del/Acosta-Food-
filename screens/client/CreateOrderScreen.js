import { db } from '../../firebaseConfig'; 
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const crearPedido = async () => {
  await addDoc(collection(db, "pedidos"), {
    cliente: "Juan",
    items: [{ nombre: "Casado", precio: 3500 }],
    estado: "pendiente",
    fecha: serverTimestamp()
  });
};