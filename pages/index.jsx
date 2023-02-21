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

const HomePage = ({ meetups }) => {
	return (
		<>
			<MeetupList meetups={meetups} />
		</>
	);
};

// export async function getServerSideProps(context) {
// 	// fetch whatever, always ran on server never on client
// 	// you really only need to use this function over getStaticProps if you need access to the req/res or you truly have data updating multiple times every second
// 	const req = context.req;
// 	const res = context.res;

// 	return {
// 		props: {
// 			meetups: DUMMY,
// 		},
// 	};
// }

export async function getStaticProps() {
	// fetch data from API
	// anything you want, this function never runs on the client machine, only during build
	// always return object in getStaticProps
	return {
		props: {
			meetups: DUMMY,
		},
		// updates every 10 seconds if there is new data coming in
		revalidate: 10,
	};
}

export default HomePage;
