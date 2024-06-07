import Img from "../Img/Index";
import Title from "../Title/Index";
import Paragraph from "../Paragraph/Index";
import ImgSearch from "../../Imgs/Search.png"
import ImgConfig from "../../Imgs/Config.png"

const Buscador = (props) => {
    return(
        <>
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="Buscar Categorías" 
                className="search-input" 
            />
            <div>
                <Img src={ImgSearch} className="search-icon"></Img>
                <Img src={ImgConfig} className="filter-icon"></Img>
            </div>
        </div>
        </>
    )
}
export default Buscador