import React from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

const Services = () => {
	const services = [
		{
			icon: <FaCocktail />,
			title: 'free cocktails',
			info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		},
		{
			icon: <FaHiking />,
			title: 'endless hiking',
			info: 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
		},
		{
			icon: <FaShuttleVan />,
			title: 'free shuttle',
			info: 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
		},
		{
			icon: <FaBeer />,
			title: 'strongest beer',
			info: 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
		},
	];

	return (
		<section className='services'>
			<Title title='services'></Title>
			<div className='services-center'>
				{services.map((service, index) => (
					<article key={index} className='service'>
						<span>{service.icon}</span>
						<h6>{service.title}</h6>
						<p>{service.info}</p>
					</article>
				))}
			</div>
		</section>
	);
};

export default Services;
