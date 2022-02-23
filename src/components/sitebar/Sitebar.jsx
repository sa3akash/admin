import { AttachMoney, Equalizer, Feedback, Insights, LineStyle, MailOutline, Message, Person, Report, Timeline, TrendingUp, WorkOutline } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import './sitebar.css'

const Sitebar = () => {
    return (
        <div className='sitebar'>
            <div className="sitebarWraper">
                <div className="sitebarMenu">
                    <h3 className="sitebarTitle">Dashboard</h3>
                    <ul className="sitebarList">
                        <li className="listItem active">
                            <Link to='/'>
                                <LineStyle className='sitebarIcons'/> Home
                            </Link>
                        </li>
                        <li className="listItem">
                            <Timeline className='sitebarIcons'/> Analytics
                        </li>
                        <li className="listItem">
                            <TrendingUp className='sitebarIcons'/> Sales
                        </li>
                        
                    </ul>
                </div>
                <div className="sitebarMenu">
                    <h3 className="sitebarTitle">Quick Menu</h3>
                    <ul className="sitebarList">
                        <li className="listItem ">
                            <Link to='/users'>
                                <Person className='sitebarIcons'/> Users
                            </Link>
                        </li>
                        <li className="listItem ">
                            <Link to='/products'>
                                <Person className='sitebarIcons'/> Products
                            </Link>
                        </li>
                    
                        <li className="listItem">
                            <AttachMoney className='sitebarIcons'/> Transactions
                        </li>
                        <li className="listItem">
                            <Equalizer className='sitebarIcons'/> Reports
                        </li>
                        
                    </ul>
                </div>
                <div className="sitebarMenu">
                    <h3 className="sitebarTitle">Notifications</h3>
                    <ul className="sitebarList">
                        <li className="listItem ">
                            <MailOutline className='sitebarIcons'/> Mail
                        </li>
                        <li className="listItem">
                            <Feedback className='sitebarIcons'/> Feedback
                        </li>
                        <li className="listItem">
                            <Message className='sitebarIcons'/> Messages
                        </li>
                        
                    </ul>
                </div>
                <div className="sitebarMenu">
                    <h3 className="sitebarTitle">Staff</h3>
                    <ul className="sitebarList">
                        <li className="listItem">
                            <WorkOutline className='sitebarIcons'/> Manage
                        </li>
                        <li className="listItem">
                            <Insights className='sitebarIcons'/> Analytics
                        </li>
                        <li className="listItem">
                            <Report className='sitebarIcons'/> Reports
                        </li>
                        
                    </ul>
                </div>
    
            </div>
        </div>
    )
}

export default Sitebar
