import './Credits.css'
import honeybudlogo from '../../assets/images/honeybud-icon.png'
import {ContactInfo} from './ContactInfo'
import {Slogan} from './Slogan'

export const Credits = () => {
    return (
        <div className = "CreditsBar">
            <ContactInfo />
            <img src={honeybudlogo} alt='honeybudlogo' style={{width: '20%', height: '20%'}}/>
            <Slogan />
        </div>
    )
}