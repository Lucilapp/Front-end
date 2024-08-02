import { Image, StyleSheet, Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import CategoryList from '../../../components/category/CategoryList.jsx';
import SearchBar from '../../../components/SearchBar.jsx';
import CategoryFilter from '../../../components/category/CategoryFilter.jsx';
import apiCallGET from '../../../api/apiCalls.js'
export default function HomeScreen() {
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
        console.log(cat);
        console.log(tags)
        setInitialCat(cat);
        setResults(cat);
        setInitialTags(tags);
        setLoading(false);
      }
      fetchCat();
    }, [start])
    useEffect(() => {
      console.log(usedTags)
    }, [usedTags])
    // useEffect(() => {
    //   const filterCatbyTag = (cats, tags) => {
    //     let filteredCats = [];
    //     tags.forEach(tag => {
    //       let batch = cats.filter((cat) => cat.tag === tag);
    //       filteredCats = [...filteredCats, ...batch]
    //     });
    //     return filteredCats;
    //   }
    //   const empty = [];
    //   if(usedTags !== empty){
    //     setResults(filterCatbyTag(results,usedTags));
    //   }
    //   else {
    //     setResults(categories);
    //   }
    // }, [usedTags]);
    return (
      <>
        {!loading && (<>
          <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.row}>
              <SearchBar categories = {initialCat} setResults = {setResults}/>
              <CategoryFilter style={styles.filter} tags = {initialTags} usedTags = {usedTags} setTags = {setUsedTags}/>
            </View>
            <View style={styles.main}>
              <CategoryList categories = {results}/>
            </View>
            <View style={styles.footer}/>
          </SafeAreaView>
        </>)}
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
