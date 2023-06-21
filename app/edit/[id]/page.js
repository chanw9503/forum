import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function Edit(props) {
  const db = (await connectDB).db('forum');
  console.log(props);
  let result = await db
    .collection('post')
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className="p-20">
      <h4>수정 페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input name="title" defaultValue={result.title} required />
        <input name="content" defaultValue={result.content} required />
        <input
          name="_id"
          defaultValue={result._id.toString()}
          required
          style={{ display: 'none' }}
        />
        <button type="submit">수정</button>
      </form>
    </div>
  );
}
