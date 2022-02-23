import { Language, NotificationsNone, Settings } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './topbar.css';

const Topbar = () => {
    return (
        <div className="topBar">
            <div className='topbarWraper'>
                <div className="topLeft">
                    <Link to="/">
                    <span className="logo">SA2Admin</span>
                    </Link>
                </div>
                <div className="topRight">
                    <div className="topbarIconsContainer">
                            <NotificationsNone />
                            <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconsContainer">
                            <Language />
                    </div>
                    <div className="topbarIconsContainer">
                            <Settings />
                    </div>
                    <img src="https://cdn.pixabay.com/photo/2019/09/26/15/46/woman-4506318_960_720.jpg" alt="" className="topAvater" />
                </div>
            </div>
        </div>
    )
}

export default Topbar;
