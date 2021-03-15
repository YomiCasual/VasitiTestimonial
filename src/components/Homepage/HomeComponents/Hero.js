
import heroImg from '../../../assets/images/hero-image.png'
const Hero = () => {
    return (
        <div className="hero padding-rl">
            <div className="left-content">
                <h3 className="hero-title">
                <span>Amazing</span>
                <span>Experiences from Our</span>
                <span>Wonderful Customers</span>
                </h3>
                <p>Here is what customers and vendors are saying about us, you can share your stories with us too.</p>
            </div>
            <div className="right-content">
                <div className="circle-background">
                <img src={heroImg} className="hero-img" alt="heroImg" />
                </div>
            </div>
        </div>
    )
}

export default Hero
