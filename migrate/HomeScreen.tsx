import { Image, StyleSheet, Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import CategoryList from '../components/CategoryList.jsx';
import SearchBar from '../components/SearchBar.jsx';

const categories = [
    { id: '1', name: 'Instagram', pending: 2, time: 'Hace 3min' },
    { id: '2', name: 'Sacar turno', pending: 1, time: 'Hace 1min' },
    { id: '3', name: 'YouTube', pending: 1, time: 'Hace 4min' },
    { id: '4', name: 'Instalar Apps', pending: 5, time: 'Hace 1min' },
    { id: '5', name: 'Gobierno', pending: 5, time: 'Hace 1min' },
    { id: '6', name: 'Trámites', pending: 5, time: 'Hace 1min' },
    { id: '7', name: 'Páginas Web', pending: 5, time: 'Hace 1min' },
    { id: '8', name: 'Archivos', pending: 1, time: 'Hace 4min' },
    { id: '9', name: 'Archivos', pending: 1, time: 'Hace 4min' },
    { id: '10', name: 'Archivos', pending: 1, time: 'Hace 4min' },
    { id: '11', name: 'Archivos', pending: 1, time: 'Hace 4min' },
    { id: '12', name: 'Archivos', pending: 1, time: 'Hace 4min' },
    { id: '13', name: 'Archivos', pending: 1, time: 'Hace 4min' },
];
export default function HomeScreen() {
    const [initialCat, setInitialCat] = useState(categories);
    const [results, setResults] = useState(categories);
    return (
      <>
        <SafeAreaView>
          <SearchBar categories = {initialCat} setResults = {setResults}/>
          <View style={styles.main}>
            <CategoryList categories = {results}/>
          </View>
        </SafeAreaView>
        
      </>
    );
  }
  
  const styles = StyleSheet.create({
    main: {
      flex: 1,
      minHeight:1000
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    }
  });
