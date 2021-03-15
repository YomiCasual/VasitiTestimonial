import Logo from '../../../assets/images/logo.png'
const Header = () => {
	return (
		<div className="top-bar">
			<div className='menu-header padding-rl'>
				<div>
					<img src={Logo} alt="logo"  className="logo"/>
				</div>
				<ul className='navbar main'>
					<li>ABOUT US</li>
					<li>STORIES</li>
					<li>CONTACT</li>
					<li>LOG IN</li>
					<li className='active'>SIGN UP</li>
				</ul>
			</div>
            <div className="menu-sub">
            <ul className='navbar sub'>
					<li>MARKETPLACE</li>
					<li>WHOLESALE CENTER</li>
					<li>SELLER CENTER</li>
					<li>SERVICES</li>
					<li>INTERNSHIPS</li>
					<li>EVENTS</li>
				</ul>
            </div>
		</div>
	);
};

export default Header;
