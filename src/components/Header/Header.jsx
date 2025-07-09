import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/img/argentBankLogo.png"
import { Link } from "react-router"
import { logout } from "../../actions/signIn.action";
import { useNavigate } from "react-router-dom"


function Header() {
    const token = useSelector((state) => state.signInReducer.token);
    const userData = useSelector((state) => state.userReducer.userData)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout= () => {
        dispatch(logout())
        sessionStorage.clear();
        localStorage.clear();
        navigate("/login");
    }

    return (
        <header>
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                {token ? (
                    <div>
                        <Link className="main-nav-item" to="/user"><i className="fa fa-user-circle"></i>{userData.userName}</Link>
                        <Link className="main-nav-item" to="/" onClick={handleLogout}><i className="fa fa-sign-out"></i>Sign Out</Link>
                    </div>
                ) : (
                    <div>
                        <Link className="main-nav-item" to="/login"><i className="fa fa-user-circle"></i>
                        Sign In
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header