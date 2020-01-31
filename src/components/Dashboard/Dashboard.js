import React from 'react'
import Asside from '../Asside'
import Navbar from '../Navbar'
import { Route } from 'react-router-dom';
import Home from '../Home'
import Itn from '../Itn'
import Scan1 from '../Scan1'
import Scan2 from '../Scan2'
import Stack from '../Stack'
import './Dashboard.scss'

const Dashboard = () => {

    return (
        <section className="Dashboard">
            <Asside />
            <div className="Dashboard-Main">
                <Navbar />
                <Route path='/' component={Home} exact />
                <Route path='/itn' component={Itn} />
                <Route path='/scan1' component={Scan1} />
                <Route path='/scan2' component={Scan2} />
                <Route path='/stake' component={Stack} />
            </div>
        </section>
    )
}

export default Dashboard