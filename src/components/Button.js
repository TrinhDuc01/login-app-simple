import { useDispatch, useSelector } from "react-redux"
import { Bounce, toast } from "react-toastify"

const userdata = {
    username: "duc",
    password: "123"
}

const Button = () => {
    const username = useSelector(state => state.userReducer.username)
    const password = useSelector(state => state.userReducer.password)
    const borderColor = useSelector(state => state.themeReducer.borderColor)
    const backgroundColor = useSelector(state => state.themeReducer.backgroundColor)
    const textColor = useSelector(state => state.themeReducer.textColor)
    const dispatch = useDispatch();
    const style = {
        padding: "10px 20px",
        border: `2px solid ${borderColor}`,
        borderRadius: "10px",
        color: textColor,
        backgroundColor,
        transition: "3s"
    }

    const handleLogin = () => {
        if (userdata.username === username && userdata.password === password) {
            dispatch({ type: "RESET" })
            return toast.success('Chuc mung ban da dang nhap thanh cong!', {
                position: "bottom-left",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        toast.error('Tai khoan hoac mat khau khong chinh xac!', {
            position: "bottom-left",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        return
    }
    return <button onClick={handleLogin} style={style}>
        Login
    </button>
}

export default Button