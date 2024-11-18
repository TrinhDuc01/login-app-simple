import { useDispatch, useSelector } from "react-redux"
import "./css/Theme.css"

const Theme = () => {
    const dispatch = useDispatch()
    const textColor = useSelector(state => state.themeReducer.textColor)
    const style = {
        color: textColor,
        fontSize: 30,
        transition: "3s",
        textShadow: "rgba(0, 0, 0, 0.2) 0px 4px 12px"
    }
    const styleContainer = {
        display: "flex",
        gap:30,
    }
    return <div style={styleContainer}>
        <i onClick={() => dispatch({ type: "A" })} style={style} class="fa-solid fa-ice-cream"></i>
        <i onClick={() => dispatch({ type: "B" })} style={style} class="fa-regular fa-moon"></i>
        <i onClick={() => dispatch({ type: "C" })} style={style} class="fa-solid fa-paw"></i>
    </div>
}

export default Theme