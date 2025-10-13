import './Navbar.css'

function NavBar(){

    return (
        <header className="navbar">
            <div className="logo"></div>

            <nav className="nav-links">
                <a href="">Home</a>
                <a href="">Favourites</a>
                <a href="">Profile</a>
            </nav>
        </header>
                
    );
}


export default NavBar;