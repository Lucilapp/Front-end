import Img from "../Img/Index";
import Title from "../Title/Index";
import Paragraph from "../Paragraph/Index";
import ImgReloj from "../../Imgs/Reloj.png";

const Card = (props) => {
    function cortarString(str) {
        if (str.length > 29) {
            return str.slice(0, 25) + ' ...';
        }
        return str;
    }
    const TitleText = cortarString(props.TitleText);
    function stringPendiente() {
        let strPendiente = ""
        if(props.ParaPendientes === 1){
            strPendiente = props.ParaPendientes + " pendiente"
        }
        else{
            strPendiente = props.ParaPendientes + " pendientes"
        }
        return strPendiente
    }
    return (
        <>
        <div style={{display: "flex",flexDirection: "row",justifyContent: "space-between", border: '1px solid #00000020', borderRadius: '0.5rem', width: props.width, height: props.height, backgroundColor: '#B2DEFF', marginBottom:"10px"}}>
            <Title text={TitleText} fontSize="24px" marginLeft="5px" marginTop="0px" maxWidth="50%" textAlign="start"/>
            <div style={{display: "flex", flexDirection:"column", alignItems:"end"}}> 
                <Paragraph text={stringPendiente()}  fontSize="20px" margin="0" textAlign="right" marginRight="8px" marginTop="2px"/>
                <div style={{display: "flex", flexDirection:"row", alignItems:"center", marginRight:"8px", marginTop:"7%"}}>
                    <Img src={ImgReloj} className="Reloj-icon"/>
                    <Paragraph text={'Hace '+props.ParaTiempo+' min'} fontSize="20px" margin="0" textAlign="right"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card;