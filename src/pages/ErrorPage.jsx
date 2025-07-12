import { Link } from "react-router"

function ErrorPage() {
    return (
        <>
            <section className="errorPage">
                <h1 className="errorPage__title">404</h1>
                <p className="errorPage__txt">La page que vous demandez n'existe pas.</p>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </section>
        </>
    )
}

export default ErrorPage