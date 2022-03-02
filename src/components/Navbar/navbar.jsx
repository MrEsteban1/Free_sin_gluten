import "./style.css"

const Navbar = () => {
    return(
        <nav >
            <div className="brand">
                <img src="assets/logo.jpg" alt="" />
                <span>Free Sin Gluten</span>
            </div>
            <ul>
                <li>Home</li>
                <li>Productos</li>
                <li>Nosotros</li>
                <li><img src="assets/chart.png" alt="" /></li>
            </ul>
        </nav>
    )
}

export default Navbar