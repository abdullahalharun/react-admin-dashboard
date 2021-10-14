import "./widgetLg.css";
import profile from '../../images/profile.png';

export default function WidgetLg() {
    const Button = ({type}) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transaction</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={profile} alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Mariyam</span>
                    </td>
                    <td className="widgetLgDate">10 October 2021</td>
                    <td className="widgetLgAmount">$100.00</td>
                    <td className="widgetLgStatus"><Button type="Approved" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={profile} alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Mariyam</span>
                    </td>
                    <td className="widgetLgDate">10 October 2021</td>
                    <td className="widgetLgAmount">$100.00</td>
                    <td className="widgetLgStatus"><Button type="Declined" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={profile} alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Mariyam</span>
                    </td>
                    <td className="widgetLgDate">10 October 2021</td>
                    <td className="widgetLgAmount">$100.00</td>
                    <td className="widgetLgStatus"><Button type="Pending" /></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={profile} alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Mariyam</span>
                    </td>
                    <td className="widgetLgDate">10 October 2021</td>
                    <td className="widgetLgAmount">$100.00</td>
                    <td className="widgetLgStatus"><Button type="Approved" /></td>
                </tr>
            </table>
        </div>
    )
}
