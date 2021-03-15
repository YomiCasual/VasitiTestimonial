import Experience from './HomeComponents/Experience'
import Footer from './HomeComponents/Footer'
import Header from './HomeComponents/Header'
import Hero from './HomeComponents/Hero'
import OtherExperience from './HomeComponents/OtherExperience'
import SecondExperience from './HomeComponents/SecondExperience'

import "./Homepage.css"

const Homepage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Experience />
            <OtherExperience />
            <SecondExperience />
            <OtherExperience />
            <Footer/>
        </div>
    )
}

export default Homepage
