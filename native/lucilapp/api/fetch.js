const urlbase = "http://localhost:3000/api/";
const fetchAllCategories = () => {
    var array = [];
    var urlApi = urlbase + "categoria";
    useEffect(() => {
        fetch(urlApi)
        .then(response => response.json())
        .then(data => array = data.results)
        .catch(error => console.log('Hubo un error ' + error))
    }, [])
    return array;
}

export default fetch();