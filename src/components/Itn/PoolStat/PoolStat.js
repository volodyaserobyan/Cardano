import React from 'react'
import earth from '../../../assets/earth.png'
import money from '../../../assets/money.png'
import './PoolStat.scss'

const PoolStat = () => {

    return (
        <section className="PoolStat">
            <div className="PoolStat-Cont">
                <h1>Pool Stat</h1>
                <div className="PoolStat-Cont-Context">
                    <div>
                        <img src={money} alt='' />
                        <div>
                            {/* <p>Live stake (ADA)</p> */}
                            <h1>49,550,815</h1>
                        </div>
                    </div>
                </div>
                <div className="PoolStat-Cont-Footer">
                    <div>
                        <h1>1,193</h1>
                        <p>Total blocks generated</p>
                    </div>
                    <div>
                        <h1>17,848</h1>
                        <p>Last epoch rewards (ADA)</p>
                    </div>
                    <div>
                        <h1>5 hours ago</h1>
                        <p>Last block generated</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PoolStat