import React from "react";
import SvgLogo from "../Svg_logo/Svg_logo"
import "./Header.css";
const Header = () => {
return(
        <React.Fragment>
            <header style={{background: 'white'}} >
                <div className="nav-flex container-width ">
                    <div className="logo-reyhoon">
                       <SvgLogo/>
                    </div>  
                    <nav className="help">  
                        <ul className="help">
                            <li><a href="#">راهنما</a></li>
                        </ul>
                        <ul className="login">
                            <li><a href="#">عضویت</a></li>
                            <li className="dash">|</li>
                            <li><a href="#">ورود</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="horizontal-line"></div>
        </React.Fragment>
    )
}
export default Header;








