import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY = [
	{
		id: 'm1',
		title: 'Event1',
		image: 'https://static01.nyt.com/images/2022/12/20/science/16tb-cinnamon-bear/16tb-cinnamon-bear-articleLarge.jpg?quality=75&auto=webp',
		address: '4321 address',
		description: 'first meetup!!',
	},
	{
		id: 'm2',
		title: 'Event2',
		image: 'https://static01.nyt.com/images/2022/12/20/science/16tb-cinnamon-bear/16tb-cinnamon-bear-articleLarge.jpg?quality=75&auto=webp',
		address: '3453 address',
		description: 'first meetup!!',
	},
	{
		id: 'm3',
		title: 'Event3',
		image: 'https://static01.nyt.com/images/2022/12/20/science/16tb-cinnamon-bear/16tb-cinnamon-bear-articleLarge.jpg?quality=75&auto=webp',
		address: '3123 address',
		description: 'first meetup!!',
	},
	{
		id: 'm4',
		title: 'Event4',
		image: 'https://static01.nyt.com/images/2022/12/20/science/16tb-cinnamon-bear/16tb-cinnamon-bear-articleLarge.jpg?quality=75&auto=webp',
		address: '4564 address',
		description: 'first meetup!!',
	},
];

const HomePage = () => {
	const [meetups, setMeetups] = useState([]);
	useEffect(() => {
		// send an http request and setMeetups to data
		setMeetups(DUMMY);
	}, []);
	return (
		<>
			<MeetupList meetups={meetups} />
		</>
	);
};

export default HomePage;
