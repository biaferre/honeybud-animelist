import './ContactInfo.css'
import emailicon from '../../assets/images/emailicon.png';

export const ContactInfo = () => {
    return (
        <div className = "ContactInfoBar">
            <h1>talk to us!</h1>
            <div className = "EmailInfo">
                <img src={emailicon} alt = "email-icon" className= "EmailIcon"/>
                <p>contact-us@honeybud.com</p>
            </div>
            <div className="InstaInfo">
                <p>insta: @honeybudanime</p>
            </div>
        </div>
    )
}