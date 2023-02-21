import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';

const NewMeetup = () => {
	const router = useRouter();
	async function addMeetupHandler(data) {
		const res = await fetch('/api/new-meetup', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const resData = await res.json();

		console.log(resData);

		// does now allow you to press back button
		// router.replace('/')
		router.push('/');
	}
	return (
		<>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</>
	);
};

export default NewMeetup;
