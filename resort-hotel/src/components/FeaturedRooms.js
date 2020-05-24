import React from 'react';
import { RoomContext } from '../context';

const FeaturedRooms = () => {
	const contextType = React.useContext(RoomContext);
	const items = contextType;

	console.log(items);

	return <div>featured rooms</div>;
};

export default FeaturedRooms;
