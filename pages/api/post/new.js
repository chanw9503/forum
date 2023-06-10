import { connectDB } from '@/util/database';

export default async function handler(request, response) {
  if (request.method == 'POST') {
    const body = request.body;
    const db = (await connectDB).db('forum');
    let result = await db.collection('post').insertOne(body);
    return response.status(200).json('저장완료');
  }
}
