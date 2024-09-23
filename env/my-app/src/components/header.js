import './header.css'

function Header() {
    return (
        <div className="header-main">
            <div className="container" style={{height:'53px'}}>
                <nav className="menu-container">
                    <ul style={{padding:0,margin:0}}>
                        <li className="menu-item"><a>home</a></li>
                        <li className="menu-item"><a>pages</a></li>
                        <li className="menu-item"><a>departments</a></li>
                        <li className="menu-item"><a>contact</a></li>
                        <li className="menu-item"><a>news</a></li>
                    </ul>
                </nav>

            </div>
        </div>

    )
}

export default Header;
