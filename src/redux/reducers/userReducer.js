const defaultState = {
    username: "",
    password: ""
}



const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET NAME":
            return { username: action.payload, password: state.password }
        case "SET PASS":
            return { username: state.username, password: action.payload }
        case "RESET":
            return { username: "", password: "" }
        default:
            return state
    }
}

export default userReducer