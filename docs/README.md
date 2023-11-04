# ROCKET NextJS DOCS

Our project is a Next.js boilerplate that incorporates various technologies and libraries to streamline development. It utilizes `NuxtAuth` for authentication and user management, and the `page router` provided by Next.js. Additionally, we've used `Tailwind CSS` for styling and included `empty` sample pages to make customization easy. The codebase also includes a `MongoDB connection` for data storage, as well as schema definitions to enforce data structure. This combination of tools and patterns allows for efficient and secure development of Next.js applications with seamless authentication, a modular UI component system, and easy customization through Tailwind CSS.

---

## Dependencies 

```
"dependencies": {
    "@auth/mongodb-adapter": "^2.0.0",
    "bcrypt": "^5.1.1",
    "flowbite": "^1.8.1",
    "flowbite-react": "^0.6.1",
    "mongodb": "^6.1.0",
    "mongoose": "^7.5.3",
    "next": "latest",
    "next-auth": "^4.23.1",
    "nodemailer": "^6.9.5",
    "react": "latest",
    "react-dom": "latest"
  },
  "devDependencies": {
    "@types/bcrypt": "^5.0.0",
    "@types/node": "latest",
    "@types/nodemailer": "^6.4.11",
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "autoprefixer": "latest",
    "eslint": "latest",
    "eslint-config-next": "latest",
    "postcss": "latest",
    "tailwindcss": "latest",
    "typescript": "latest"
  }
```
---

## Environment 

Here's a sample description of the values in the `.env` file:

- `NODE_ENV=development`: This sets the environment variable for the current Node.js environment to "development". This can affect the behavior of certain modules or libraries depending on how they are configured.

- `NEXTAUTH_URL=http://localhost:3000`: This sets the URL that NextAuth should use for authentication callbacks and redirects. In this case, it is set to a local development URL.

- `NEXTAUTH_SECRET=`: This sets the secret key that NextAuth should use to sign and encrypt session data. The value can be generated using the `openssl rand -hex 32` command in Linux, or by using an online generator.

- `MONGODB_URI=mongodb://0.0.0.0:27017/`: This sets the MongoDB connection string that the project should use to connect to a MongoDB instance. In this case, it is set to a local MongoDB instance running on port 27017.

- `DB_NAME=rocketnextjs`: This sets the name of the database that the project should use when connecting to MongoDB.

- `EMAIL_SERVER=smtp://user:password@host:port`: This sets the SMTP server that should be used for sending emails. The value should be formatted as `smtp://username:password@hostname:port`.

- `EMAIL_SERVER_HOST=`: This sets the hostname of the SMTP server that should be used for sending emails.

- `EMAIL_SERVER_PORT=`: This sets the port number of the SMTP server that should be used for sending emails.

- `EMAIL_SERVER_USER=`: This sets the username for authenticating with the SMTP server that should be used for sending emails.

- `EMAIL_SERVER_PASSWORD=`: This sets the password for authenticating with the SMTP server that should be used for sending emails.

- `EMAIL_FROM=`: This sets the email address that should be used as the "from" address when sending emails.

- `AUTH_GOOGLE_ID=`: This sets the client ID for authenticating with Google's OAuth service.

- `AUTH_GOOGLE_SECRET=`: This sets the client secret for authenticating with Google's OAuth service.

---

## How to Compile 

node version > `18.0.0`

```bash
npm run build
# or
yarn build
```
---

## How to deploy 

Here's an overview of how to deploy a Next.js application:

1. Build the Next.js application using the `npm run build` command. This will create a production-ready version of the application in the `/.next` directory.

2. Choose a hosting provider for your application. There are many options available, including Vercel, AWS, Google Cloud, and others.

3. Set up your hosting environment. This will depend on the provider you choose, but generally involves creating a new environment or instance for your application.

4. Upload your application files to the hosting environment. This can be done using FTP, SCP, or other file transfer methods.

5. Install the required dependencies for your application on the hosting environment using the `npm install` command.

6. Start the application using the `npm run start` command. This will start the Node.js server and make your application available on the specified port.

7. Configure any necessary environment variables for your application on the hosting environment. This can be done using a `.env` file or through the provider's configuration interface.

8. Test your application to ensure that it is running correctly on the hosting environment.

9. Set up any necessary monitoring or logging tools to ensure that your application is performing correctly and to identify any issues that may arise.

These are just general steps, and the specific process for deploying a Next.js application may vary depending on your hosting provider and other factors. It's always a good idea to consult your provider's documentation for detailed instructions on how to deploy your application.

---

## Support 

https://discord.gg/fZC6hup

