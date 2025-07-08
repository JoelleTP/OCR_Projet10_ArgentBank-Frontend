import Button from "../Button/Button.jsx"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../actions/signIn.action.js"
import { useNavigate } from "react-router-dom"

function Form() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [remember, setRemember] = useState(false)
    const [formError, setFormError] = useState("")
    const error = useSelector((state) => state.signInReducer.error);

    const checkboxChange = (e) => {
      setRemember(e.target.checked);
    }

    const handleForm = async (e) => {
      e.preventDefault();
      const email = e.target.username.value
      const password = e.target.password.value
      if (!email || !password) {
        setFormError("Veuillez compléter tous les identifiants")
        return
      }
      setFormError("")
      const userData = {
        email: email,
        password: password,
      }
      const token = await dispatch(login(userData))
      e.target.reset();
      if(token) {
        if (remember) {
          localStorage.setItem("token", token)
        }
        sessionStorage.setItem("token", token);
        navigate('/user')
      }
    }

    return(
        <form onSubmit={handleForm}>
          <div className="input-wrapper">
            <label>
                Username
                <input type="text" id="username" />
            </label>
          </div>
          <div className="input-wrapper">
            <label>
                Password
                <input type="password" id="password" />
            </label>
          </div>
          <div className="input-remember">
            <label>
                <input 
                type="checkbox" 
                id="remember-me"
                checked={remember}
                onChange={checkboxChange} />
                Remember me
            </label>
          </div>
          <Button 
            className="sign-in-button"
            title="Sign In"
          />
          {formError &&
            <div className="error">
              {formError}
            </div>
          }
          {error &&
            <div className="error">
              {error}
            </div>
          }
        </form>
    )
}

export default Form