import '../css/Navbar.css';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [cllickCollapse, setClickCollapse] = useState(false);

    return(
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-header">
                    <Link className="navbar-logo" to="/">
                        <img className="navbar-img" src="../images/logo/web-logo.png" alt='adobe digital cafe logo'/>
                    </Link>
                    <button type="button" className="navbar-toggle" onClick={()=>{setClickCollapse(!cllickCollapse)}}>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>                        
                    </button>
                </div>
                <div className={cllickCollapse ? "navbar-collapse active" : "navbar-collapse"}>
                    <ul className="navbar-right">
                        <li><Link to="/Lesson-plans">Lesson plans</Link></li>
                        <li><Link to="/Helpful-resources">Helpful resources</Link></li>
                        <li><Link to="/Student-showcases">Student showcases</Link></li>
                        <li><Link to="/Upcoming-Workshops">Upcoming workshops</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;