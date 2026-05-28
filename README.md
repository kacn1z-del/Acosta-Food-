# Acosta-Food-# 🚀 DeliveryApp – Sistema de pedidos con GPS y QR

## 📖 Descripción
DeliveryApp es un ecosistema modular tipo Uber Eats que incluye:
- **App Cliente** → pedidos, seguimiento GPS, pagos, QR menú.  
- **App Restaurante** → subida de imágenes, gestión de pedidos, QR dinámico.  
- **App Súper Admin** → panel global con métricas, mapa de repartidores y control de usuarios.

---

## 🧩 Arquitectura
- **Frontend móvil:** React Native (Expo).  
- **Frontend web:** React.  
- **Backend:** Firebase (Auth, Firestore, Storage, Realtime DB).  
- **Mapas:** Google Maps API.  
- **Pagos:** Stripe / SINPE.  
- **QR:** `react-native-qrcode-svg`.  

---

## ⚙️ Instalación
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tuusuario/DeliveryApp.git
   cd DeliveryApp
