import React from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import logo from '../../assets/logo.png'
import home from '../../assets/home.png'
import itn from '../../assets/itn.png'
import scan from '../../assets/scan.png'
import stake from '../../assets/stake.png'
import './Asside.scss'

const Asside = props => {
    const { pathname } = props.location;
    return (
        <aside className="Asside">
            <div className="Asside-Navbar">
                <nav>
                    <img src={logo} alt="" />
                    <h1>Welcome to SCAN Pool</h1>
                </nav>
            </div>
            <div className="Asside-Wrapper">
                <ul>
                    <NavLink to={{
                        pathname: '/'
                    }}
                        className={pathname === '/' && 'isActive'}>
                        <li><img src={home} alt='' /> <p>Home</p></li>
                    </NavLink>
                    <NavLink to={{
                        pathname: '/itn'
                    }}
                        activeClassName='isActive'>
                        <li><img src={itn} alt='' /> <p>ITN</p></li>
                    </NavLink>
                    <NavLink to={{
                        pathname: '/scan1'
                    }}
                        activeClassName='isActive'>
                        <li><img src={scan} alt='' /> <p>Scan 1</p></li>
                    </NavLink>
                    <NavLink to={{
                        pathname: '/scan2'
                    }}
                        activeClassName='isActive'>
                        <li><img src={scan} alt='' /> <p>Scan 2</p></li>
                    </NavLink>
                    <NavLink to={{
                        pathname: '/stake'
                    }}
                        activeClassName='isActive'>
                        <li><img src={stake} alt='' /> <p>Stake Guide</p></li>
                    </NavLink>
                </ul>
            </div>
        </aside>
    )
}

export default withRouter(Asside)