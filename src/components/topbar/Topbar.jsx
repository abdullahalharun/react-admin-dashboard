import React from 'react';
import "./topbar.css";
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <Link to="/" className="link">
                    <div className="topLeft">
                        <span className="logo">React Admin Dashboard</span>
                    </div>
                </Link>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                        <span className="topIconBag">2</span>
                    </div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU7e3yY-nnVcDeBwvIbiudYF31Mev0qbip4w&usqp=CAU" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
