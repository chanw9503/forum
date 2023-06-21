import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function handler(request, response) {
  const db = (await connectDB).db('forum');
  if (request.method === 'POST') {
    console.log(request.body);
    let changeValues = { title: request.body.title, content: request.body.content };
    let result = await db
      .collection('post')
      .updateOne({ _id: new ObjectId(request.body._id) }, { $set: changeValues });

    response.redirect(302, '/list');
  }
}
