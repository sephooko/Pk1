import React from "react";

export const Header=()=>{
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Dashboard</a>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link disabled" href="/create-cards">Create Cards</a>
                        </li>
                    </ul>
                </div>
                <a className="nav-link" href="sign-out">Sign Out</a>
            </nav>
        </>
    )
}

export default Header;
