import { Link } from "react-router-dom";
// import SearchBar from "./SearchBar";

/*function Header () {
    

    
    return (
        <header className="main-header light-mode">
            <div className="title">
            <h1>Bulls & Bears magazzine</h1>
            <br />
            <h2>Welcome to your volatile newsletter</h2>
            </div>
            
            <div className="navbar home"><Link to={"/"}>Home</Link></div>
            <br />
            <div className="navbar crypto"><Link to={"/crypto"}>Crypto</Link></div>
            <br />
            <div className="navbar stocks"><Link to={"/stocks"}>Stocks</Link></div>
            <SearchBar/>
        </header>
    )
}*/

function Header () {
    return (
        <header className="header">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/crypto">Crypto</Link>
                <Link to="/stocks">Stocks</Link>
            </nav>
        </header>
    )
}

export default Header