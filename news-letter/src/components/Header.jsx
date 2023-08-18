import { Link } from "react-router-dom";

function Header () {
    

    
    return (
        <header className="main-header light-mode">
            <div className="navbar"><Link to={"/"}>Home</Link></div>
            <br />
            <div className="navbar"><Link to={"/crypto"}>Crypto</Link></div>
            <br />
            <div className="navbar"><Link to={"/stocks"}>Markets</Link></div>
        </header>
    )
}

export default Header