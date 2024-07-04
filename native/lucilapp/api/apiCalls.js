const url = "";
const fetchCategories = async () => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
    } catch (error) {
      console.log(error)
    }
}