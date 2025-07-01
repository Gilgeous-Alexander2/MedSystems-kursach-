import { Link } from 'react-router-dom';
import './header.css'

function Header() {
    return (
        <div className="header-main">
            <div className="container" style={{height:'53px'}}>
                <nav className="menu-container">
                    <ul style={{padding:0,margin:0}}>
                        <li className="menu-item"><Link to={"/"}>home</Link></li>
                        <li className="menu-item"><Link to={"/search"}>find a doctor</Link></li>
                        <div className="menu-item"><Link to={"/profile"}>profile</Link></div>
                    </ul>
                </nav>
                <div style={{display: 'flex',flexGrow:1}}></div>
                <div className="menu-item"><Link to={"/login"}>login</Link></div>
            </div>
        </div>

    )
}

export default Header;
