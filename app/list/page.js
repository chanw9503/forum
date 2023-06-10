import { connectDB } from '@/util/database';
import Link from 'next/link';
import DetailLink from './DetailLink';

export default async function List() {
  const db = (await connectDB).db('forum');
  let result = await db.collection('post').find().toArray();

  return (
    <div className="list-bg">
      {result.map((value) => {
        return (
          <div className="list-item" key={value.id}>
            <h4>{value.title}</h4>
            <Link prefetch={false} href={`/detail/${value._id.toString()}`}>
              이동
            </Link>
            <DetailLink />
            <p>{value.content}</p>
          </div>
        );
      })}
    </div>
  );
}
