import {Link} from 'react-router-dom'
import secondExp from '../../../assets/images/secondExp.png';
const SecondExperience = () => {
	return (
		<div className='hero padding-rl orange'>
			<div className='left-content orange'>
				<h3 className='sub-title'>Josiah’s Experience</h3>
				<h5 className='tag orange-tag'>VENDOR</h5>
				<p className='marginTop'>
					I had the best experience shopping with vasiti. Usability of the
					website was great, very good customer service, an all round great
					experience. I would definately be coming back! I had the best
					experience shopping with vasiti. Usability of the website was great,
					very good customer service, an all round great experience. I would
					definately be coming back!
				</p>
				<Link to="/testimonialForm" className='button-class'>
					SHARE YOUR OWN STORY!
					<div className='line'></div>
				</Link>
			</div>
			<div className='right-content'>
				<div className='circle-background'>
					<img src={secondExp} className='hero-img' alt='heroImg' />
				</div>
			</div>
		</div>
	);
};

export default SecondExperience;
