import Button from "../components/Button/Button.jsx"
import { Accountdata } from "../data/Accountdata.jsx"
import Account from "../components/Account/Account.jsx"

function User() {
    return (
        <main className="main bg-dark">
            <div class="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <Button 
                    className="edit-button"
                    title="Edit Name"
                />
            </div>
            <h2 class="sr-only">Accounts</h2>
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