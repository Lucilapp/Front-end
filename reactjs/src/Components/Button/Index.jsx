const Button = (props) => {
    return (
        <>
        <button
            className= {props.className} 
            onClick={
                props.click} 
            style={{
                backgroundColor: props.backgroundColor,
                backgroundImage: props.backgroundImage, 
                color:props.color, 
                borderRadius: props.borderRadius, 
                width: props.width, 
                height: props.height, 
                fontSize: props.fontSize, 
                fontWeight: props.fontWeight, 
                fontFamily:props.fontFamily,
                border: props.border,
                marginTop: props.marginTop,
                marginBottom: props.marginBottom,
                marginLeft: props.marginLeft,
                marginRight: props.marginRight
            }}
        >{props.text}</button>
        </>
    )
}

export default Button;