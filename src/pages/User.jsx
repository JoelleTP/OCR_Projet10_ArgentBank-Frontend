import Button from "../components/Button/Button.jsx"
import { Accountdata } from "../data/Accountdata.jsx"
import Account from "../components/Account/Account.jsx"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { editName } from "../app/actions/user.action.js"

function User() {
    const userData = useSelector((state) => state.userReducer.userData)
    const token = useSelector((state) => state.signInReducer.token)
    const [form, setForm] = useState(false)
    const [formError, setFormError] = useState("")
    const dispatch = useDispatch()

    const handleClick = () => {
        setForm(!form)
        setFormError("")
    }

    const handleEditName = async (e) => {
        e.preventDefault();
        const userName = e.target.username.value
        if (!userName) {
            setFormError("Veuillez compléter le User Name")
            return
        }
        setFormError("")
        await dispatch(editName(userName, token))
        setForm(!form);
    }

    return (
        <main className="main bg-dark">
           {form ? (
                <div className="header">
                    <h1>Edit user info</h1>
                    <form className="editName_form" onSubmit={handleEditName}>
                            <label>
                                User name:
                                <input type="text" id="username" defaultValue={userData?.userName} />
                            </label>
                       
                        <label>
                            First name:
                            <input type="text" id="firstname" disabled={true} defaultValue={userData?.firstName} />
                        </label>
                        <label>
                            Last name:
                            <input type="text" id="lastname" disabled={true} defaultValue={userData?.lastName} />
                        </label>
                        <div className="editName_button">
                            <Button 
                                type="submit"
                                className="sign-in-button"
                                title="Save"
                            />
                            <Button onClick={handleClick}
                                className="sign-in-button"
                                title="Cancel"
                            />
                        </div>
                    {formError &&
                        <div className="error">
                            {formError}
                        </div>
                    }
                    </form>
                </div>
            ) : (
                <div className="header">              
                    <h1>Welcome back<br />
                    {userData && `${userData?.firstName} ${userData?.lastName}!`}</h1>
                    <Button 
                        onClick={handleClick}
                        className="edit-button"
                        title="Edit Name"
                    />
                </div>
            )}
            <h2 className="sr-only">Accounts</h2>
            {Accountdata.map(({ id, title, amount, description }) => (
                <Account 
                    key={id}
                    title={title}
                    amount={amount}
                    description={description}    
                />
            ))}   
        </main>   
    )
}

export default User