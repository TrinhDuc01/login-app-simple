import { useSelector } from "react-redux"

const Text = ({text}) =>{
    const textColor = useSelector(state=>state.themeReducer.textColor)
    const style = {
        fontSize:40,
        color:textColor,
        transition: "3s"
    }
    return <h1 style={style}>
        {text}
    </h1>
}

export default Text