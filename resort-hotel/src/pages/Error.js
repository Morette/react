import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';

const Error = () => (
	<Hero>
		<Banner title='404' substitle='page not found'>
			<Link to='/' className='btn-primary'>
				return home
			</Link>
		</Banner>
	</Hero>
);

export default Error;
