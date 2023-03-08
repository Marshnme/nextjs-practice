import { useRouter } from 'next/router';
import { MongoClient, ObjectId } from 'mongodb';
import Head from 'next/head';
import styles from '../styles/MeetupDetails.module.css';

const MeetupDetails = ({ meetupData }) => {
	console.log(meetupData);
	return (
		<>
			<Head>
				<title>{meetupData.title}</title>
				<meta
					name="description"
					content={meetupData.description}
				></meta>
			</Head>
			<section className={styles.detailParent}>
				<img src={meetupData.image} />
				<h1>{meetupData.title}</h1>
				<span> ID: {meetupData.id}</span>
				<address>{meetupData.address}</address>
				<p>{meetupData.description}</p>
			</section>
		</>
	);
};

// You only need this function if your using getStaticProps and its a dynamic page
export async function getStaticPaths() {
	// you would get your id's from a database then render these params dynamically
	const client = await MongoClient.connect(
		`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@nextjs-practice.7mziiho.mongodb.net/?retryWrites=true&w=majority`
	);

	const db = client.db();
	const collection = db.collection('meetups');
	const meetups = await collection.find({}, { _id: 1 }).toArray();
	client.close();
	return {
		// fallback to false will render 404 if a user went to /m5.
		// if fallback was set to true, it would render the /m5 even if the path isnt defined. So, if you have 100s of pages, you can set your most popular pages in the paths array for fast loading, then render the other pages once the user requests the path

		fallback: true,
		paths: meetups.map((meetup) => ({
			params: { meetupId: meetup._id.toString() },
		})),
	};
}

export async function getStaticProps(context) {
	// fetch data for single meetup

	let meetupId = context.params.meetupId;
	console.log('MEETUP ID', meetupId);
	const client = await MongoClient.connect(
		`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@nextjs-practice.7mziiho.mongodb.net/?retryWrites=true&w=majority`
	);

	const db = client.db();
	const collection = db.collection('meetups');
	const selectedMeetup = await collection.findOne({
		_id: new ObjectId(meetupId),
	});
	client.close();

	return {
		props: {
			meetupData: {
				id: selectedMeetup._id.toString(),
				title: selectedMeetup.title,
				address: selectedMeetup.address,
				image: selectedMeetup.image,
				description: selectedMeetup.description,
			},
		},
	};
}

export default MeetupDetails;
