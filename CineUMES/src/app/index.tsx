import {StyleSheet, Text, View} from 'react-native';

const App = () => (
  <View>
    <View style={page.header}>
      <Text style={flattenStyle}>Cine UMES</Text>
      <Text style={subtextStyle}>Reserva tu próxima función</Text>
    </View>

    <View style={page.container}>
      <Text>Misión Espacial</Text>
      <Text>Ciencia Ficción</Text>
      <Text>120 minutos</Text>
    </View>

    <View style={page.containerHorarios}>
      <Text style={subtextStyle}>Horarios</Text>
      <Text style={page.code}>14:00</Text>
      <Text style={page.code}>17:00</Text>
      <Text style={page.code}>17:00</Text>
    </View>
    <View style={page.containerHorarios}>
      <Text>Tipo de entrada</Text>
    </View>
  </View>
);

const page = StyleSheet.create({
  containerHeader: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'column'
  },
  containerHorarios: {
    flex: 1,
    padding: 10,
    align: 'start',
    flexDirection: 'column'
  },
  text: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  subtext: {
    color: '#000',
    fontSize: 6,
    fontWeight: 'Regular',
  },
  code: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    color: '#666',
    backgroundColor: '#eaeaea',
  },
});

const typography = StyleSheet.create({
  header: {
    color: '#000000',
    fontSize: 30,
    marginBottom: 1,
  },

});

const flattenStyle = StyleSheet.flatten([page.text, typography.header]);
const subtextStyle = StyleSheet.flatten([page.subtext, typography.header])

export default App;