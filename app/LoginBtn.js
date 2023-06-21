'use client';

import { signIn, signOut } from 'next-auth/react';

export default function LoginBtn(props) {
  return (
    <>
      {props.name ? (
        <div>
          <span>{props.name}</span>
          <button
            onClick={() => {
              signOut();
            }}>
            로그아웃
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            signIn();
          }}>
          로그인
        </button>
      )}
    </>
  );
}
