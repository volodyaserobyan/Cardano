// import React from 'react'
// import earth from '../../../assets/earth.png'
// import money from '../../../assets/money.png'
// import './PoolStat.scss'

// const PoolStat = () => {

//     return (
//         <section className="PoolStat">
//             <div className="PoolStat-Cont">
//                 <h1>Pool Stat</h1>
//                 <div className="PoolStat-Cont-Context">
//                     <div>
//                         <img src={money} alt='' />
//                         <div>
//                             {/* <p>Live stake (ADA)</p> */}
//                             <h1>49,550,815</h1>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="PoolStat-Cont-Footer">
//                     <div>
//                         <h1>1,193</h1>
//                         <p>Total blocks generated</p>
//                     </div>
//                     <div>
//                         <h1>17,848</h1>
//                         <p>Last epoch rewards (ADA)</p>
//                     </div>
//                     <div>
//                         <h1>5 hours ago</h1>
//                         <p>Last block generated</p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default PoolStat

import React, { useState, useEffect } from 'react'
import earth from '../../../assets/earth.png'
import money from '../../../assets/money.png'
import './PoolStat.scss'

const PoolStat = props => {

    const [stat, setStat] = useState(
        {
            title: "",
            cash: "",
            num1: "",
            num2: "",
            num3: "",
            footer1: "",
            footer2: "",
            footer3: "",
            img: ""
        }
    )
    useEffect(() => {
        switch (props.id) {
            case 0: {
                setStat({
                    title: "Pool stats",
                    cash: " 49,550,815",
                    num1: "1,193",
                    num2: "17,848",
                    num3: "5 hours ago",
                    footer1: "Last block generated",
                    footer2: "Last block generated",
                    footer3: "Last block generated",
                    img: money

                })
                break;
            }
            case 1: {
                setStat({
                    title: "Network stats",
                    cash: "10,651,753,841",
                    num1: "44",
                    num2: "24,005",
                    num3: "3:16:09",
                    footer1: "Epoch",
                    footer2: "Slot",
                    footer3: "Time Since Last Block",
                    img: earth
                })
                break;
            }
        }
    }, [props.id])

    return (
        <section className="PoolStat">
            <div className="PoolStat-Cont">
                <h1>{stat.title}</h1>
                <div className="PoolStat-Cont-Context">
                    <div>
                        <img src={stat.img} alt='' />
                        <div>
                            <h1>{stat.cash}</h1>
                        </div>
                    </div>
                </div>
                <div className="PoolStat-Cont-Footer">
                    <div>
                        <h1>{stat.num1}</h1>
                        <p>{stat.footer1}</p>
                    </div>
                    <div>
                        <h1>{stat.num2}</h1>
                        <p>{stat.footer2}</p>
                    </div>
                    <div>
                        <h1>{stat.num3}</h1>
                        <p>{stat.footer3}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PoolStat