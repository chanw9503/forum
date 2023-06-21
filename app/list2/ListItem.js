'use client';

import Link from 'next/link';

export default function ListItem(props) {
  return (
    <div>
      {props.result.map((value) => {
        return (
          <div className="list-item" key={value._id}>
            <Link prefetch={false} href={`/detail/${value._id.toString()}`}>
              <h4>{value.title}</h4>
            </Link>
            <Link href={`/edit/${value._id.toString()}`}>✏️</Link>
            <p>{value.content}</p>
            <span
              onClick={(e) => {
                // fetch('/api/post/delete', {
                //   method: 'POST',
                //   body: value._id,
                // })
                //   .then((r) => r.json())
                //   .then(() => {
                //     e.target.parentElement.style.opacity = 0;
                //     setTimeout(() => {
                //       e.target.parentElement.style.display = 'none';
                //     }, 1000);
                //   });

                fetch('/api/abc/kim');
              }}>
              🗑️
            </span>
          </div>
        );
      })}
    </div>
  );
}
