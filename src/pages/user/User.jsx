import './user.css';
import profile from '../../images/profile.png';
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src={profile} alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Harunur Rashid</span>
                            <span className="userShowUserTitle">Web Developer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                             <span className="userShowInfoTitle">harunur_rashid</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                             <span className="userShowInfoTitle">30.07.1994</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                             <span className="userShowInfoTitle">+88 015 2111</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                             <span className="userShowInfoTitle">email@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                             <span className="userShowInfoTitle">Dhaka, Bangladesh</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label htmlFor="">Username</label>
                                <input type="text" placeholder="harunur_rashid" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Fullname</label>
                                <input type="text" placeholder="Harunur Rashid" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Phone</label>
                                <input type="text" placeholder="+88 0152111" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder="email@gmail.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Address</label>
                                <input type="text" placeholder="Dhaka, Bangladesh" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon" />
                                </label>
                                <input id="file" type="file" style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
