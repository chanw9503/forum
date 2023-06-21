import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '9e09174386359c754d7d',
      clientSecret: 'bfe8f2fea2c4dc08c304f6894504ab7c53d96e84',
    }),
  ],

  secret: 'qwer1234 ',
  adapter : MongoDBAdapter()
};

export default NextAuth(authOptions);
