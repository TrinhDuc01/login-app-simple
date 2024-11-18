import { useDispatch, useSelector } from "react-redux"

const Input = ({ value, text,type, actionType }) => {
    const borderColor = useSelector(state => state.themeReducer.borderColor)
    const backgroundColor = useSelector(state => state.themeReducer.backgroundColor)
    const textColor = useSelector(state => state.themeReducer.textColor)

    const style = {
        padding: "20px 30px",
        fontSize: 20,
        border: `2px solid ${borderColor}`,
        borderRadius: 20,
        transition: "3s",
        backgroundColor,
        color: textColor
    }
    const dispatch = useDispatch();
    console.log(actionType)
    const handleChange = (e) => {
        dispatch({ type: actionType, payload: e.target.value })
    }
    return <div>
        <input value={value} type={type} placeholder={text} onChange={(e) => handleChange(e)} style={style} />
    </div>
}

export default Input