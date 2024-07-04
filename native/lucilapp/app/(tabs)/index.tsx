import { Image, StyleSheet, Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import CategoryList from '../../components/CategoryList.jsx';
import SearchBar from '../../components/SearchBar.jsx';
import CategoryFilter from '../../components/CategoryFilter.jsx';
import fetchCat from '../../api/apiCalls.js';
fetchCat();
const categories = [
  { id: '1', name: 'Instagram', pending: 2, time: 'Hace 3min', tag: 'Móbil' },
  { id: '2', name: 'Turno Médico', pending: 1, time: 'Hace 1min', tag: 'Formulario' },
  { id: '3', name: 'YouTube', pending: 1, time: 'Hace 4min', tag: 'Móbil' },
  { id: '4', name: 'Instalar Apps', pending: 5, time: 'Hace 1min', tag: 'Móbil' },
  { id: '5', name: 'Gobierno', pending: 5, time: 'Hace 1min', tag: 'Formulario' },
  { id: '6', name: 'Trámites', pending: 5, time: 'Hace 1min', tag: 'Formulario' },
  { id: '7', name: 'Páginas Web', pending: 5, time: 'Hace 1min', tag: 'Escritorio' },
  { id: '8', name: 'Archivos', pending: 1, time: 'Hace 4min', tag: 'Escritorio' },
  { id: '9', name: 'iOS', pending: 1, time: 'Hace 4min', tag: 'Móbil' },
  { id: '10', name: 'Facebook', pending: 1, time: 'Hace 4min', tag: 'Móbil' },
  { id: '11', name: 'Presentación', pending: 1, time: 'Hace 4min', tag: 'Escritorio' },
  { id: '12', name: 'Windows 10', pending: 1, time: 'Hace 4min', tag: 'Escritorio' },
  { id: '13', name: 'PDF', pending: 1, time: 'Hace 4min', tag: 'Escritorio' },
];
fetch
export default function HomeScreen() {
    const [initialCat, setInitialCat] = useState(categories);
    const [results, setResults] = useState(categories);
    return (
      <>
        <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.row}>
            <SearchBar categories = {initialCat} setResults = {setResults}/>
            <CategoryFilter style={styles.filter} setResults = {setResults}/>
          </View>
          <View style={styles.main}>
            <CategoryList categories = {results}/>
          </View>
          <View style={styles.footer}/>
        </SafeAreaView>
        
      </>
    );
  }
  
  const styles = StyleSheet.create({
    main: {
      flex: 1,
      minHeight:1000,
    },
    safeAreaView:{
      marginTop: 10
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
    },
    filter: {
      marginTop: 8,
      zIndex: 1,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    footer: {
      height: 20,
    },
  });
