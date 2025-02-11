# Event_Management_System
Event Management System , TypeScript Learning purpose 

Event Management System Backend Part

This is a Node.js backend project using Express.js and TypeScript.

Getting Started

First, install dependencies:

npm install
# or
yarn install

Run the development server:

npm run dev
# or
yarn dev

The server will start at http://localhost:8080.

Build for production:

npm run build

Start production server:

npm run start

API Endpoints

Authentication

POST /api/auth/register - Register a new user

POST /api/auth/login - Authenticate user and get JWT

POST /api/auth/logout - Logout user

Events

GET /api/events/:userId - Get a list of user events

POST /api/events/create-event - Create a new event

GET /api/events/event/:eventId - Get details of a specific event

PUT /api/events/event/:eventId - Update an event

DELETE /api/events/event/:eventId - Delete an event

Environment Variables

Create a .env file and add the following:

PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

Learn More

To learn more about the technologies used in this project, check out:

Express.js Documentation

TypeScript Documentation

Mongoose Documentation

Deployment

To deploy, use platforms like Vercel, Railway, or Render for backend hosting.

Happy Coding! 🚀

