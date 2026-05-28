🚀 DeliveryApp – Plataforma Inteligente de Pedidos con GPS, QR y Multilenguaje

📖 Descripción

DeliveryApp es un ecosistema moderno de delivery inspirado en plataformas como Uber Eats y Rappi, diseñado para conectar clientes, restaurantes y administradores en una sola solución escalable.

La plataforma incorpora:

* 📍 Seguimiento GPS en tiempo real.
* 🧾 Generación de QR dinámicos.
* 🌐 Soporte multilenguaje indígena.
* 🔥 Backend en Firebase.
* 💳 Integración de pagos digitales.
* 📦 Gestión avanzada de pedidos y repartidores.

⸻

✨ Características Principales

👤 App Cliente

* Registro e inicio de sesión.
* Búsqueda de restaurantes cercanos.
* Pedidos en tiempo real.
* Seguimiento GPS del repartidor.
* Historial de pedidos.
* Pago digital.
* Escaneo de QR de menús.

⸻

🍔 App Restaurante

* Panel administrativo.
* Gestión de menú.
* Subida de imágenes.
* Recepción de pedidos en tiempo real.
* Estados de preparación.
* Generación de QR dinámicos.

⸻

🛡️ App Súper Admin

* Dashboard global.
* Métricas del sistema.
* Control de usuarios.
* Monitoreo de repartidores.
* Gestión de restaurantes.
* Estadísticas en tiempo real.

⸻

🌎 Inclusión Multilenguaje

DeliveryApp promueve la preservación cultural mediante soporte para:

* 🇨🇷 Español
* 🇺🇸 English
* 🌱 Bribri
* 🌿 Cabécar
* 🪶 Boruca
* 🌄 Ngäbe

⸻

🧩 Arquitectura

📱 Frontend Móvil

* React Native
* Expo

💻 Frontend Web

* React

☁️ Backend

* Firebase Authentication
* Firestore
* Firebase Storage
* Realtime Database

🗺️ Mapas y GPS

* Google Maps API
* React Native Maps

💳 Pagos

* Stripe
* SINPE Móvil

🔳 QR

* react-native-qrcode-svg

🌐 Internacionalización

* i18n

⸻

⚙️ Instalación

1️⃣ Clonar repositorio

git clone https://github.com/tuusuario/DeliveryApp.git
cd DeliveryApp

2️⃣ Instalar dependencias

npm install

⸻

▶️ Ejecutar proyecto

Expo

npx expo start

Android

npx expo run:android

iOS

npx expo run:ios

⸻

🔥 Configuración Firebase

Crear archivo:

/services/firebaseConfig.js

Ejemplo:

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT.firebaseapp.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

⸻

📂 Estructura del Proyecto

src/
 ├── screens/
 ├── components/
 ├── services/
 ├── navigation/
 ├── translations/
 ├── hooks/
 ├── utils/
 └── assets/

⸻

🛣️ Roadmap

* ✅ Pedidos en tiempo real
* ✅ Tracking GPS
* ✅ Firebase integrado
* 🔄 Chat cliente/repartidor
* 🔄 Notificaciones Push
* 🔄 IA para recomendaciones
* 🔄 Sistema de repartidores
* 🔄 Modo oscuro
* 🔄 Panel web avanzado

⸻

🤝 Contribuciones

Las contribuciones son bienvenidas.

1. Fork del proyecto.
2. Crear rama:

git checkout -b feature/nueva-funcion

3. Commit:

git commit -m "Nueva función"

4. Push:

git push origin feature/nueva-funcion

5. Abrir Pull Request.

⸻

📜 Licencia

MIT License.Keny Chinchilla Navarro 

⸻

👨‍💻 Desarrollador

Desarrollado por Kenneth Chinch