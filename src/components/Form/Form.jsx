import Button from "../Button/Button.jsx"

function Form() {
    return(
        <form>
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
                <input type="checkbox" id="remember-me" />
                Remember me
            </label>
          </div>
          <Button />
        </form>
    )
}

export default Form