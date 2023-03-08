import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import Head from 'next/head';

const HomePage = ({ meetups }) => {
	return (
		<>
			<Head>
				<title>React Meetups</title>
				<meta
					name="description"
					content="Browse local meetups of all kinds!"
				></meta>
			</Head>
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
	const client = await MongoClient.connect(
		`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@nextjs-practice.7mziiho.mongodb.net/?retryWrites=true&w=majority`
	);

	const db = client.db();
	const collection = db.collection('meetups');

	const allMeetups = await collection.find().toArray();

	client.close();

	return {
		props: {
			meetups: allMeetups.map((meetup) => ({
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				description: meetup.description,
				id: meetup._id.toString(),
			})),
		},
		// updates every 10 seconds if there is new data coming in
		revalidate: 10,
	};
}

export default HomePage;
