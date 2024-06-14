const Paragraph = (props) => {
    return (
        <>
        <p style={{
            width: props.width,
            color: props.color, 
            backgroundColor: props.backgroundColor, 
            fontWeight: props.fontWeight, 
            fontSize: props.fontSize,
            textAlign: props.textAlign,
            marginTop: props.marginTop,
            marginBottom: props.marginBottom,
            marginLeft: props.marginLeft,
            marginRight: props.marginRight,
            margin: props.margin
            
        }}>
            {props.text}</p>
        </>
    )
}

export default Paragraph;