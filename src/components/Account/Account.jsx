import Button from "../Button/Button.jsx"

function Account({ title, amount, description}){
    return (
      <section className="account">
          <div class="account-content-wrapper">
            <h3 className="account-title">{title}</h3>
            <p className="account-amount">{amount}</p>
            <p class="account-amount-description">{description}</p>
        </div>
        <div class="account-content-wrapper cta">
          <Button 
            className="transaction-button"
            title="View transactions"
          />
        </div>
      </section>
    )
}

export default Account