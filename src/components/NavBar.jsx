
import CartWidget from "./CartWidget"
const Header = () => {
    const notificationCount = 3;
    return(
        <header id="header" className="flex justify-between p-4 bg-blue-400 shadow-md">
        <h1><a href="../index.html">Home</a></h1>
        <nav className="navbar">
            <a href="#">Productos</a>
            <a href="#">Ofertas</a>
            <a href="#">Sobre Nosotros</a>
            <CartWidget notificationCount={notificationCount} />
        </nav>
        </header>
    )
}

export default Header