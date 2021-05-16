import { NavLink } from 'react-router-dom';

const Header = (props) => {
    
    return <header className="App-Header">
        <NavLink 
            to="/" 
            className="Header-Link"
        >UMX-DX App</NavLink>
        {props.Oauth2 ? (
            <div className="Header-Navbar">
                <NavLink 
                    to="/account" 
                    className="Header-Link"
                    activeClassName="Header-Link-Active"
                >Account</NavLink>
                <NavLink 
                    to="/" 
                    className="Header-Link"
                    onClick={() => props.SetAppState({
                        Oauth2: null,
                        Cerner: null,
                        MainIndex: 0,
                        AccountIndex: 0,
                        DisplayCount: 25,
                        DisplayIndex: 0
                    })}
                >Log Out</NavLink>
            </div>
        ) : (
            <div className="Header-Navbar">
                <NavLink 
                    to="/launch-patient" 
                    className="Header-Link"
                    activeClassName="Header-Link-Active"
                >Patient</NavLink>
                <NavLink 
                    to="/launch-provider" 
                    className="Header-Link"
                    activeClassName="Header-Link-Active"
                >Provider</NavLink>
            </div>
        )}
    </header>
};

export default Header;