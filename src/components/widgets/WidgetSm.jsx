import "./widgetSm.css";
import profile from '../../images/profile.png';
import { Visibility } from "@material-ui/icons";

export default function widgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src={profile} alt="User" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Abdullah</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={profile} alt="User" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Abdullah</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={profile} alt="User" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Abdullah</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={profile} alt="User" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Abdullah</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={profile} alt="User" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Abdullah</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>                
            </ul>
        </div>
    )
}