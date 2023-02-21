import { MongoClient } from 'mongodb';

// api never runs on client

// /api/new-meetup  would be the api route

async function handler(req, res) {
	if (req.method === 'POST') {
		const data = req.body;

		const client = await MongoClient.connect(
			`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@nextjs-practice.7mziiho.mongodb.net/?retryWrites=true&w=majority`
		);
		const db = client.db();
		const collection = db.collection('meetups');

		const result = await collection.insertOne(data);

		console.log(result);

		client.close();

		res.status(201).json({ message: 'Meetup inserted!' });
	}
}

export default handler;
