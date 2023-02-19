import styles from '../styles/MeetupDetails.module.css';

const MeetupDetails = () => {
	return (
		<section className={styles.detailParent}>
			<img
				src="https://static01.nyt.com/images/2022/12/20/science/16tb-cinnamon-bear/16tb-cinnamon-bear-articleLarge.jpg?quality=75&auto=webp"
				alt="a bear sitting down"
			/>
			<h1>First Meetup</h1>
			<address>wow an addy</address>
			<p>Description</p>
		</section>
	);
};

export default MeetupDetails;
