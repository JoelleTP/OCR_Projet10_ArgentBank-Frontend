export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const ERROR = "ERROR"

export const login = (data) => {
    return async (dispatch) => {
        try {
            const response = await fetch ("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const resData = await response.json();
            const token = resData.body.token
            dispatch({ type: LOGIN, payload: token });
            return token
        }
        catch (error) {
            dispatch({ type: ERROR, payload: error.message });
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        dispatch ({ type: LOGOUT, payload: null});
    }
}