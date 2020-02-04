import React from 'react'
import CardStat from './CardStat'
import './Itn.scss'

const Itn = () => {

    return (
        <section className="Itn">
            <div className="Itn-Cont">
                <div className="Itn-Cont-Card">
                    {[0,1,2].map(id => <CardStat key={id} id={id} />)}
                </div>
            </div>
        </section>
    )
}

export default Itn