import { Image, StyleSheet, Platform, View, Touchable, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';
import CategoryList from '../../../components/category/CategoryList.jsx';
import SearchBar from '../../../components/searchBar/SearchBar.jsx';
import CategoryFilter from '../../../components/category/CategoryFilter.jsx';
import apiCallGET from '../../../api/apiCalls.js';
import NavBar from '../../../components/NavBar/NavBar.jsx';

export default function HomeScreen({navigation}) {
    const [initialCat, setInitialCat] = useState();
    const [initialTags, setInitialTags] = useState([]);
    const [results, setResults] = useState();
    const [usedTags, setUsedTags] = useState([]);
    const [loading, setLoading] = useState(true);
    let start = true;
    useEffect(() => {
      async function fetchCat() {
        const cat =  await apiCallGET('categoria');
        const tags =  await apiCallGET('filtro');
        
        setInitialCat(cat);
        setResults(cat);
        setInitialTags(tags);
        setLoading(false);
        console.log(tags)
        console.log("initialTags: "+initialTags)
        console.log("usedTags: "+usedTags)

      }
      fetchCat();
    }, [start])
    return (
      <>
        {!loading && (<>
          <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.row}>
              <SearchBar categories = {initialCat} setResults = {setResults}/>
            </View>
            <View style={styles.filterContainer}>
              <CategoryFilter style={styles.filter} tags = {initialTags} usedTags = {usedTags} setTags = {setUsedTags}/>
            </View>
            <View style={styles.main}>
              <CategoryList categories = {results}/>
            </View>
            <View style={styles.footer}>
            </View>
          </SafeAreaView>
          <NavBar></NavBar>
        </>)}
      </>
    );
  }
  
  const styles = StyleSheet.create({
    main: {
      flex: 1,
    },
    safeAreaView:{
      marginTop: 10
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
    },
    filter: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end'
    },
    filterContainer: {
      zIndex: 10,
      position: 'absolute',
      top: 10,
      width: '95%',
      height: 30,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
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
