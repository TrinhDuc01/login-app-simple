import { useSelector } from "react-redux"
import Button from "./Button"
import Input from "./Input"
import Text from "./Text"
import "./css/login.css"


const Login = () => {
    const username = useSelector(state => state.userReducer.username)
    const password = useSelector(state => state.userReducer.password)
    const tab = useSelector(state => state.themeReducer.tab)
    const userdata = {
        username: "duc",
        password: "123"
    }
    const style = {
        backgroundColor: tab,
        transition: "3s"
    }
    return <div className="login-app" style={style}>
        <Text text={"LOGIN APP"} />
        <Input actionType="SET NAME" type='text' text="Username" value={username} />
        <Input actionType="SET PASS" type='password' text="Password" value={password} />
        <Button />
    </div>
}

export default Login