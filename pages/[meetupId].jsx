import { useRouter } from 'next/router';
import styles from '../styles/MeetupDetails.module.css';

const MeetupDetails = ({ meetupData }) => {
	let { id } = meetupData;
	return (
		<section className={styles.detailParent}>
			<img
				src="https://static01.nyt.com/images/2022/12/20/science/16tb-cinnamon-bear/16tb-cinnamon-bear-articleLarge.jpg?quality=75&auto=webp"
				alt="a bear sitting down"
			/>
			<h1>First Meetup</h1>
			<span> ID: {id}</span>
			<address>wow an addy</address>
			<p>Description</p>
		</section>
	);
};

// You only need this function if your using getStaticProps and its a dynamic page
export async function getStaticPaths() {
	// you would get your id's from a database then render these params dynamically
	return {
		// fallback to false will render 404 if a user went to /m5.
		// if fallback was set to true, it would render the /m5 even if the path isnt defined. So, if you have 100s of pages, you can set your most popular pages in the paths array for fast loading, then render the other pages once the user requests the path

		fallback: false,
		paths: [
			{
				params: {
					meetupId: 'm1',
				},
			},
			{
				params: {
					meetupId: 'm2',
				},
			},
			{
				params: {
					meetupId: 'm3',
				},
			},
			{
				params: {
					meetupId: 'm4',
				},
			},
		],
	};
}

export async function getStaticProps(context) {
	// fetch data for single meetup

	let meetupId = context.params.meetupId;

	return {
		props: {
			meetupData: {
				id: meetupId,
				image: 'https://static01.nyt.com/images/2022/12/20/science/16tb-cinnamon-bear/16tb-cinnamon-bear-articleLarge.jpg?quality=75&auto=webp',
				title: 'First Meetup',
				address: 'wow an addy',
				description: 'Description',
			},
		},
	};
}

export default MeetupDetails;
