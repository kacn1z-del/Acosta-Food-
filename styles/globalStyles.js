import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  label: { fontSize: 16, fontWeight: '600', marginTop: 10, marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 12, borderRadius: 8, fontSize: 16 },
  textArea: { height: 100, textAlignVertical: 'top' },
  boton: { backgroundColor: '#FF6B00', padding: 15, borderRadius: 8, marginTop: 20, marginBottom: 40 },
  botonTexto: { color: '#fff', textAlign: 'center', fontSize: 18, fontWeight: 'bold' },
});