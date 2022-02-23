import './newUser.css'

const NewUser = () => {
    return (
        <div className='newUser'>
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder='shakil123' required />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder='Shakil Ahmed' required />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder='shakilmh626@gmail.com' required />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder='Password' required />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder='+88 01900 111111' required />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder='Dhaka' required />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        
                        <label htmlFor="male">
                            <input type="radio" name='gender' id='male' value='Male' />
                            <span>Male</span>
                        </label>
                        <label htmlFor="female">
                            <input type="radio" name='gender' id='female' value='female' />
                            <span>Female</span>
                        </label>
                        <label htmlFor="others">
                            <input type="radio" name='gender' id='others' value='others' />
                            <span>Others</span>
                        </label>
                        
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select className='newUserSelect' name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className='newUserButtonsDiv'>
                <button className="newUserButtons">Create</button>
                </div>
            </form>
        </div>
    )
}

export default NewUser
