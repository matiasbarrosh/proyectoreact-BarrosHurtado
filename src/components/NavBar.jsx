import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
const Header = () => {
    const notificationCount = 3;
    return(
        <header id="header" className="flex justify-between p-4 bg-blue-400 shadow-md">
        <h1><Link to="/">Home</Link></h1>
        <nav className="navbar">
            <Link to="/clothing">Ropa</Link>
            <Link to="/joyas">Joyeria</Link>
            <Link to="/cart">Carrito</Link>
            <CartWidget notificationCount={notificationCount} />
        </nav>
        </header>
    )
}

export default Header