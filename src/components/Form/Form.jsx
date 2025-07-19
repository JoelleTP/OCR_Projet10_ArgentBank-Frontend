import Button from "../Button/Button.jsx"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../../app/actions/signIn.action.js"
import { useNavigate } from "react-router-dom"
import { getUserData } from "../../app/actions/user.action.js";

function Form() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [remember, setRemember] = useState(false)
    const [formError, setFormError] = useState("")

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
      const emailRegex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
      if (!emailRegex.test(email)) {
        setFormError("Veuillez entrer un email valide");
        return;
      }
      const userInput = {
        email: email,
        password: password,
      }
      const token = await dispatch(login(userInput))
      if(token) {
        const userData = await dispatch(getUserData(token));
        if (remember) {
          localStorage.setItem("token", token)
          localStorage.setItem("userData", JSON.stringify(userData))
        }
        setFormError("")
        navigate('/user')
      } else {
        setFormError("Identifiants inconnus")
      }
    }

    return(
        <form onSubmit={handleForm}>
          <div className="input-wrapper">
            <label>
                Username
                <input type="email" id="username" autoComplete="username" />
            </label>
          </div>
          <div className="input-wrapper">
            <label>
                Password
                <input type="password" id="password" autoComplete="current-password" />
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
            type="submit"
            className="sign-in-button"
            title="Sign In"
          />
          {formError &&
            <div className="error">
              {formError}
            </div>
          }
        </form>
    )
}

export default Form