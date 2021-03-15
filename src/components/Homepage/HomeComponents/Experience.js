
import {Link} from 'react-router-dom'
import exp from '../../../assets/images/experience1.png'
const Experience = () => {
    return (
        <div className="hero padding-rl black">
            <div className="right-content">
                <div className="circle-background">
                <img src={exp} className="hero-img" alt="heroImg" />
                </div>
            </div>
            <div className="left-content black">
                <h3 className="sub-title">
                Tolu & Joy’s Experience
                </h3>
                <h5 className="tag">CUSTOMER</h5>
                <p className="marginTop">I had the best experience shopping with vasiti. 
                    Usability of the website was great, very good customer service,
                     an all round great experience. I would definately be coming back! 
                     I had the best experience shopping with vasiti. Usability of the website was great,
                      very good customer service, an all round great experience. I would definately be coming back!</p>
            <Link to="/testimonialForm" className="button-class">
                SHARE YOUR OWN STORY!
                <div className="line"></div>
            </Link>
            </div>
        </div>
    )
}

export default Experience
