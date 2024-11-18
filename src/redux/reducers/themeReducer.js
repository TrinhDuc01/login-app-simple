const defaultState = {
    backgroundColor: "#DCE4C9",
    textColor: "#E07B39",
    borderColor: "#B6A28E",
    tab: "#F5F5DC"
}

const listTheme = [
    {
        backgroundColor: "#DCE4C9",
        textColor: "#E07B39",
        borderColor: "#B6A28E",
        tab: "#F5F5DC"
    },
    {
        backgroundColor: "#181C14",
        textColor: "#FBF4DB",
        borderColor: "#FDE7BB",
        tab: "#3C3D37"
    },
    {
        backgroundColor: "#FFF5E4",
        textColor: "#FF9494",
        borderColor: "#FFE3E1",
        tab: "#FFD1D1"
    }
]



const themeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "A":
            return listTheme[0]
        case "B":
            return listTheme[1]
        case "C":
            return listTheme[2]
        default:
            return state
    }
}

export default themeReducer