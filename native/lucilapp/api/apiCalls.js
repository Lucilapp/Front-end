import axios from 'axios';

const ip = 'localhost';
const port = '3000';
const urlbase = `http://${ip}:${port}/api/`;
const fetchCat = () => {
    axios({
        method:'get',
        url: urlbase + 'categoria',
    
    }).then((response) => {
        console.log(response.data);
    });
    return true;
}

export default fetchCat;