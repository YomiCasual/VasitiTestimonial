import VasitiPhone from '../../../assets/images/vasitiPhone.png'
import { footerLinks } from './info'
import FacebookIcon from '../../../assets/images/facebook.svg'
import InstagramIcon from '../../../assets/images/instagram.svg'
import TwitterIcon from '../../../assets/images/twitter.svg'
import LinkedIcon from '../../../assets/images/linkedIn.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="subscribe padding-rl">
            <div className="subscribe-left">
                <img src={VasitiPhone} alt="vasiti-phone" />
            </div>
            <div className="subscribe-right">
                <h3>Be a  member of our community 🎉</h3>
                <p>We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.</p>
                <form>
                    <input type="text" placeholder="enter your email address"></input>
                    <button className="subscribe-btn">SUBSCRIBE</button>
                </form>
            </div>

            </div>

            <div className='footer-links padding-rl'>
                { footerLinks.map((item, index) => (
                         <div className="footer-linkMenu" key={index}>
                         <h5>{item.header}</h5>
                         <ul className="footer-link">
                             {item.children.map((chi, idx) => (
                                 <li key={idx + chi}>{chi}</li>
                             ))}
                         </ul>
                     </div>
                ))}

                <div className="footer-linkMenu">
                         <h5>Join our community</h5>
                            <ul className="social-media-links">
                                <li><img src={FacebookIcon} alt="facebook-icon" /></li>
                                <li><img src={InstagramIcon} alt="instagram-icon" /></li>
                                <li><img src={TwitterIcon} alt="twitter-icon" /></li>
                                <li><img src={LinkedIcon} alt="linkedIn-icon" /></li>
                            </ul>
                            <p className="last-link">Email Newsletter</p>
                         </div>
               
            </div>
        </div>
    )
}

export default Footer
