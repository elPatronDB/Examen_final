import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaView style={page.screen}>
    <View style={page.containerHeader}>
      <Text style={flattenStyle}>Cine UMES</Text>
      <Text style={subtextStyle}>Reserva tu próxima función</Text>
    </View>

    <View style={page.container}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=300&q=80',
        }}
        style={page.movieImage}
      />
      <View style={page.movieInfo}>
        <Text style={page.movieTitle}>Misión Espacial</Text>
        <Text style={page.movieGenre}>Ciencia Ficción</Text>
        <Text style={page.movieDuration}>120 minutos</Text>
      </View>
    </View>

    <View style={page.containerHorarios}>
      <Text style={page.text}>Horarios</Text>
      <View style={page.row}>
        <Text style={page.code}>14:00</Text>
        <Text style={page.code}>17:00</Text>
        <Text style={page.code}>17:00</Text>
      </View>
    </View>

    <View style={page.containerTipoEntrada}>
      <Text style={page.text}>Tipo de entrada</Text>

      <View style={page.ticketsRow}>
        <TouchableOpacity style={page.ticketButton} activeOpacity={0.7}>
          <Text style={page.ticketLabel}>General</Text>
          <Text style={page.ticketPrice}>25 GTQ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={page.ticketButton} activeOpacity={0.7}>
          <Text style={page.ticketLabel}>Niños</Text>
          <Text style={page.ticketPrice}>15 GTQ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={page.ticketButton} activeOpacity={0.7}>
          <Text style={page.ticketLabel}>Adultos Mayores</Text>
          <Text style={page.ticketPrice}>20 GTQ</Text>
        </TouchableOpacity>
      </View>
    </View>

    <View style={page.containerResumen}>
      <Text style={page.text}>Resumen de compra</Text>

      <View style={page.ticketRow}>
        <Text style={page.ticketLabel}>Película:</Text>
        <Text style={page.ticketPrice}>Misión Espacial</Text>
      </View>

      <View style={page.ticketRow}>
        <Text style={page.ticketLabel}>Horario:</Text>
        <Text style={page.ticketPrice}>17:00</Text>
      </View>

      <View style={page.ticketRow}>
        <Text style={page.ticketLabel}>Entradas:</Text>
        <Text style={page.ticketPrice}>2</Text>
      </View>

      <View style={page.buttonContainer}>
        <Button title="Comprar Reserva" />
      </View>
    </View>
  </SafeAreaView>
);

const page = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  containerHeader: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    gap: 16,
  },
  movieImage: {
    width: 85,
    height: 110,
    borderRadius: 8,
    backgroundColor: '#e5e7eb',
  },
  movieInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 4,
  },
  movieTitle: {
    color: '#111827',
    fontSize: 18,
    fontWeight: 'bold',
  },
  movieGenre: {
    color: '#4b5563',
    fontSize: 14,
    fontWeight: '500',
  },
  movieDuration: {
    color: '#6b7280',
    fontSize: 13,
  },
  containerHorarios: {
    flexDirection: 'column',
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    gap: 8,
  },
  containerTipoEntrada: {
    flexDirection: 'column',
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    gap: 8,
  },
  containerResumen: {
    flexDirection: 'column',
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 4,
  },
  ticketRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },
  ticketsRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 4,
  },
  ticketButton: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 6,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    gap: 4,
  },
  ticketLabel: {
    color: '#333333',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  ticketPrice: {
    color: '#000000',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 8,
  },
  text: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtext: {
    color: '#666666',
    fontSize: 14,
    fontWeight: 'normal',
    marginTop: 2,
  },
  code: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
    color: '#333333',
    backgroundColor: '#eaeaea',
    fontWeight: '500',
  },
});

const typography = StyleSheet.create({
  header: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtext: {
    color: '#666666',
    fontSize: 14,
    marginTop: 4,
    fontWeight: 'normal',
  },
});

const flattenStyle = StyleSheet.flatten([page.text, typography.header]);
const subtextStyle = StyleSheet.flatten([page.subtext, typography.subtext]);

export default App;
