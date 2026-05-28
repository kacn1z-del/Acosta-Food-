# 🚀 DeliveryApp – Sistema de pedidos con GPS, QR y Multilenguaje

## 📖 Descripción
DeliveryApp es un ecosistema modular tipo Uber Eats que incluye:
- **App Cliente** → pedidos, seguimiento GPS, pagos, QR menú.  
- **App Restaurante** → subida de imágenes, gestión de pedidos, QR dinámico.  
- **App Súper Admin** → panel global con métricas, mapa de repartidores y control de usuarios.  

El sistema soporta **multilenguaje**: Español, Inglés, Bribri, Cabécar, Boruca y Ngäbe, promoviendo la inclusión y la preservación de lenguas indígenas de Costa Rica y Panamá.

---

## 🧩 Arquitectura
- **Frontend móvil:** React Native (Expo).  
- **Frontend web:** React.  
- **Backend:** Firebase (Auth, Firestore, Storage, Realtime DB).  
- **Mapas:** Google Maps API.  
- **Pagos:** Stripe / SINPE.  
- **QR:** `react-native-qrcode-svg`.  
- **Multilenguaje:** i18n con soporte para Español, Inglés, Bribri, Cabécar, Boruca y Ngäbe.  

---

## ⚙️ Instalación
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tuusuario/DeliveryApp.git
   cd DeliveryApp
