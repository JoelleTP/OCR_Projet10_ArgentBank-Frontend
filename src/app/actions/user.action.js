export const GET_USERDATA = "GET_USERDATA"
export const ERROR = "ERROR"
export const EDIT_NAME = "EDIT_NAME"
export const DELETE_USERDATA = "DELETE_USERDATA"

export const getUserData = (token) => {
    return async (dispatch) => {
        try {
            const response = await fetch ("http://localhost:3001/api/v1/user/profile", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`,
                },
            });
            const userData = await response.json()
            dispatch({ type: GET_USERDATA, payload: userData.body })
            return userData.body
        }
        catch (error) {
            dispatch({ type: ERROR, payload: error.message });
            return null
        }
    }
}

export const deleteUserData = () => {
    return async (dispatch) => {
        dispatch ({ type: DELETE_USERDATA, payload: {}});
    }
}

export const editName = (userName, token) => {
    return async (dispatch) => {
        try {
            const response = await fetch ("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify( {userName }),
            });
            const data = await response.json();
            dispatch({ type: EDIT_NAME, payload: data.body });
            return true
        }
        catch (error) {
            dispatch({ type: ERROR, payload: error.message });
            return false
        }
    }
}