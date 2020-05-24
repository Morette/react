import React, { useState } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg';

const Navbar = () => {
	const [isOpen, setOpen] = useState(false);

	const handleToggle = () => {
		setOpen(!isOpen);
	};

	return (
		<nav className='navbar'>
			<div className='nav-center'>
				<div className='nav-header'>
					<Link to='/'>
						<img src={logo} alt='Beach Resort' />
					</Link>
					<button className='nav-btn'>
						<FaAlignRight className='nav-icon' onClick={handleToggle} />
					</button>
				</div>
				<ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
					<li>
						<Link to='/' onClick={handleToggle}>
							Home
						</Link>
						<Link to='/rooms' onClick={handleToggle}>
							Rooms
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
