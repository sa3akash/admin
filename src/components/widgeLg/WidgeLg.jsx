import './widgeLg.css'

const WidgeLg = () => {
    const Button =({type})=> {
        return <button className={'widgeLgButton ' + type}>{type}</button>
    }
    return (
        <div className='widgeLg'>
            <h3 className="widgeLgTitle">Latest Transactions</h3>
            <table className="widgeLgTable">
                <tr className="widgeLgTr">
                    <th className="widgeLgTh">Customar</th>
                    <th className="widgeLgTh">Date</th>
                    <th className="widgeLgTh">Amount</th>
                    <th className="widgeLgTh">Status</th>
                </tr>
                <tr className="widgeLgTr">
                    <td className="widgeLgUser">
                        <img src="https://cdn.pixabay.com/photo/2020/09/07/00/34/purple-dress-5550473_960_720.jpg" alt="" className="widgeLgImg" />
                        <span className="widgeLgName">Sujon Kari</span>
                    </td>
                    <td className="widgeLgDate">10 Jan 2022</td>
                    <td className="widgeLgAmount">$122.00</td>
                    <td className="widgeLgStatus"><Button type={'Approved'}/></td>
                </tr>
                <tr className="widgeLgTr">
                    <td className="widgeLgUser">
                        <img src="https://cdn.pixabay.com/photo/2016/10/15/05/23/girl-1741941_960_720.jpg" alt="" className="widgeLgImg" />
                        <span className="widgeLgName">Sujon Kari</span>
                    </td>
                    <td className="widgeLgDate">10 Jan 2022</td>
                    <td className="widgeLgAmount">$122.00</td>
                    <td className="widgeLgStatus"><Button type={'Declined'}/></td>
                </tr>
                <tr className="widgeLgTr">
                    <td className="widgeLgUser">
                        <img src="https://cdn.pixabay.com/photo/2021/01/05/00/25/woman-5889282_960_720.jpg" alt="" className="widgeLgImg" />
                        <span className="widgeLgName">Sujon Kari</span>
                    </td>
                    <td className="widgeLgDate">10 Jan 2022</td>
                    <td className="widgeLgAmount">$122.00</td>
                    <td className="widgeLgStatus"><Button type={'Pending'}/></td>
                </tr>
                <tr className="widgeLgTr">
                    <td className="widgeLgUser">
                        <img src="https://cdn.pixabay.com/photo/2014/10/13/18/10/girl-487094_960_720.jpg" alt="" className="widgeLgImg" />
                        <span className="widgeLgName">Sujon Kari</span>
                    </td>
                    <td className="widgeLgDate">10 Jan 2022</td>
                    <td className="widgeLgAmount">$122.00</td>
                    <td className="widgeLgStatus"><Button type={'Approved'}/></td>
                </tr>
            </table>
        </div>
    )
}

export default WidgeLg;
