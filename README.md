# Care Dokter Server App

## Recommended First Setup

To run smoothly this application. Please install these tools in your local environment:

- [VSCode](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en) LTS version 18.14.0
- [PostgreSQL](https://www.postgresql.org/download/) Version 15.3
- [Postman](https://www.postman.com/downloads/) Latest Version
- [Web Browser App]()ex:Google Chrome

## Project Setup

1. Clone this repo

   ```sh
   git clone https://github.com/dheoab/care_dokter.git
   ```

2. Mount the directory using terminal.

   ```sh
   cd care_dokter
   ```

## Customize Configuration

### For Server

1. Install dependencies via terminal

   ```sh
   npm install
   ```

2. Create `.env` file in server directory with contents according to the example (see [.env.example](server/.env.example)) ensure you fill JWT_KEY`, `PORT` with your own data

3. Check [Database Configuration](config/config.json) ensure username and password are correct according your local configuration

4. Create database in your local computer

   ```sh
   npx sequelize-cli db:create
   ```

5. Migrate model into your database

   ```sh
   npx sequelize-cli db:migrate
   ```

6. Seed data into your database

   ```sh
   npx sequelize-cli db:seed:all
   ```

#### Compile for Development

1. Run the server in development mode

   ```sh
   npm run dev
   ```

#### Interaction with Server

- PORT for development dafault is 3000
- You can try API for this server on <http://localhost:[PORT]> via postman or
- You can try API for this server on <http://localhost:[PORT]/api-docs> via browser
- You can try register API: <http://localhost:[PORT]/api/auth/register> with `POST` method
- You can try login API and get your Token (JWT): <http://localhost:[PORT]/api/auth/login> with `POST` method
