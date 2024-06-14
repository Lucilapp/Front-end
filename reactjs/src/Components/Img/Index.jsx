const Img = (props) => {
    return (
        <>
        <img 
        src={props.src} 
        className={props.className}
        alt={props.alt} 
        onClick={props.click} 
        style={{height:props.height, 
            width:props.width, 
            borderRadius:props.borderRadius,
            marginTop: props.marginTop,
            marginBottom: props.marginBottom,
            marginLeft: props.marginLeft,
            marginRight: props.marginRight
            }}/>
        </>
    )
}
export default Img;