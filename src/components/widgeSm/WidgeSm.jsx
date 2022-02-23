import { Visibility } from '@mui/icons-material'
import './widgeSm.css'

const WidgeSm = () => {
    return (
        <div className='widgeSm'>
            <span className="widgeSmTitle">New Join Members</span>
            <ul className="widgeSmList">
                <li className="widgeSmMember">
                    <img src="https://cdn.pixabay.com/photo/2015/01/12/10/44/woman-597173_960_720.jpg" alt="" className="widgeSmImg" />
                    <div className="widgeSmUserInfo">
                        <span className="widgeSmUserName">Anna Kellar</span>
                        <span className="widgeSmUserDeg">Softwere Engineer</span>
                    </div>
                    <button className="wedgeSmButton">
                        <Visibility className='widgeSmIcons' /> Display
                    </button>
                </li>
                <li className="widgeSmMember">
                    <img src="https://cdn.pixabay.com/photo/2021/01/05/00/25/woman-5889282_960_720.jpg" alt="" className="widgeSmImg" />
                    <div className="widgeSmUserInfo">
                        <span className="widgeSmUserName">Anna Kellar</span>
                        <span className="widgeSmUserDeg">Softwere Engineer</span>
                    </div>
                    <button className="wedgeSmButton">
                        <Visibility className='widgeSmIcons'/> Display
                    </button>
                </li>
                <li className="widgeSmMember">
                    <img src="https://cdn.pixabay.com/photo/2018/03/01/14/57/portrait-3190849_960_720.jpg" alt="" className="widgeSmImg" />
                    <div className="widgeSmUserInfo">
                        <span className="widgeSmUserName">Anna Kellar</span>
                        <span className="widgeSmUserDeg">Softwere Engineer</span>
                    </div>
                    <button className="wedgeSmButton">
                        <Visibility className='widgeSmIcons'/> Display
                    </button>
                </li>
                <li className="widgeSmMember">
                    <img src="https://cdn.pixabay.com/photo/2019/06/02/17/33/woman-4246954_960_720.jpg" alt="" className="widgeSmImg" />
                    <div className="widgeSmUserInfo">
                        <span className="widgeSmUserName">Anna Kellar</span>
                        <span className="widgeSmUserDeg">Softwere Engineer</span>
                    </div>
                    <button className="wedgeSmButton">
                        <Visibility className='widgeSmIcons'/> Display
                    </button>
                </li>
                <li className="widgeSmMember">
                    <img src="https://cdn.pixabay.com/photo/2016/11/23/19/37/woman-1854443_960_720.jpg" alt="" className="widgeSmImg" />
                    <div className="widgeSmUserInfo">
                        <span className="widgeSmUserName">Anna Kellar</span>
                        <span className="widgeSmUserDeg">Softwere Engineer</span>
                    </div>
                    <button className="wedgeSmButton">
                        <Visibility className='widgeSmIcons'/> Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgeSm
