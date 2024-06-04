import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Your username",
        },
        password: {
          label: "Password",
          type: "text",
          placeholder: "Your password",
        },
      },
      async authorize(credentials) {
        const defaultUser = {
          id: "000",
          username: process.env.USERNAME,
          password: process.env.PASSWORD,
        };

        return credentials?.username === defaultUser.username &&
          credentials?.password === defaultUser.password
          ? defaultUser
          : null;
      },
    }),
  ],
};
