import React from 'react';
import './sidebar.css';
import { LineStyle, PermIdentity, Timeline, TrendingUp, List, AttachMoney, Settings, ExitToApp, Storefront, MailOutline, ChatBubbleOutline, DynamicFeed, WorkOutline, ReportProblem } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <PermIdentity className="sidebarIcon" />
                                Users
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className="sidebarListItem">
                                <Storefront className="sidebarIcon" />
                                Products
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon" />
                            Transaction
                        </li>
                    </ul>
                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon" />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebarIcon" />
                            Messages
                        </li>
                    </ul>
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem">
                                <WorkOutline className="sidebarIcon" />
                                Manage
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <ReportProblem className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                    
                    <h3 className="sidebarTitle">Settings</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <PermIdentity className="sidebarIcon" />
                            Profile
                        </li>
                        <li className="sidebarListItem">
                            <Settings className="sidebarIcon" />
                            Settings
                        </li>
                        <li className="sidebarListItem">
                            <ExitToApp className="sidebarIcon" />
                            Logout
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
