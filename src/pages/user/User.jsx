import { CalendarToday, LocationOn, Mail, PermIdentity, Phone, Publish } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './user.css'

const User = () => {
    return (
        <div className='user'>
            <div className="userContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to='/newUser'>
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://cdn.pixabay.com/photo/2016/11/14/03/11/geisha-1822467_960_720.jpg" alt="" className="userShowImg" />
                        <div className="userShowTitle">
                            <span className="userShowName">Jon Karli</span>
                            <span className="userShowSub">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <div className="userShowBottomTitle">Account Details</div>
                        <div className="userBottomContainer">
                            <PermIdentity className='userShowIcon' />
                            <div className="usernameTitle">shakilmh626</div>
                        </div>
                        <div className="userBottomContainer">
                            <CalendarToday className='userShowIcon' />
                            <div className="usernameTitle">12.06.2021</div>
                        </div>
                        <div className="userShowBottomTitle">Contact Details</div>
                        <div className="userBottomContainer">
                            <Mail className='userShowIcon' />
                            <div className="usernameTitle">shakil@gmail.com</div>
                        </div>
                        <div className="userBottomContainer">
                            <Phone className='userShowIcon' />
                            <div className="usernameTitle">+8801982903790</div>
                        </div>
                        <div className="userBottomContainer">
                            <LocationOn className='userShowIcon' />
                            <div className="usernameTitle">Sherpur Dhaka Bangladesh</div>
                        </div>

                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label >Username</label>
                                <input type="text" placeholder='shakilmh626' required className='userUpdateUserInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label >Full Name</label>
                                <input type="text" placeholder='Jon Karli' required className='userUpdateUserInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label >Email</label>
                                <input type="text" placeholder='shakil@gmail.com' required className='userUpdateUserInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label >Phone</label>
                                <input type="text" placeholder='+8801982903790' required className='userUpdateUserInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label >Address</label>
                                <input type="text" placeholder='Sherpur Dhaka Bangladesh' required className='userUpdateUserInput' />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://cdn.pixabay.com/photo/2016/11/14/03/11/geisha-1822467_960_720.jpg" alt="" className="userUploadImg" />
                                <label htmlFor="file" title='Upload Image'><Publish className='userUpdateImg' /></label>
                                <input type="file" id='file' required style={{ display: 'none' }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User;
