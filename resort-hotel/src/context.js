import React, { useState, useEffect } from 'react';

import items from './data';

const RoomContext = React.createContext();

const RoomProvider = ({ children }) => {
	const [context, setContext] = useState({
		rooms: [],
		sortedRooms: [],
		featuredRooms: [],
		loading: true,
	});

	useEffect(() => {
		items.map(item => {
			const id = item.sys.id;
			const images = item.fields.images.map(img => img.fields.file.url);
			const room = { ...item.fields, images, id };

			setContext(room);
		});
	}, []);

	return (
		<RoomContext.Provider value={context}>{children}</RoomContext.Provider>
	);
};

const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext };
