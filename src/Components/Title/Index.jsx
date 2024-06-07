const Title = (props) => {
    return (
        <>
        <h1 style={{color: props.color, 
            backgroundColor: props.backgroundColor, 
            fontWeight: props.fontWeight, 
            fontSize: props.fontSize, 
            marginTop: props.marginTop,
            marginBottom: props.marginBottom,
            marginLeft: props.marginLeft,
            marginRight: props.marginRight
        }}>
            {props.text}</h1>
        </>
    )
}

export default Title;