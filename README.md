# Your_Store
YourStore is an interactive e-commerce platform that aims to combat the steep competition local grocery stores face owing to recent circumstances and growing trends

Created By: Anshuman Gupta, Aditi Katiyar, Prince Choudhary and Ananya Redhu

This repository contains the source code for our store. The store is built using the MERN stack (MongoDB, Express, React, and Node.js) .

Features:
User registration and authentication
Browse and search products by category or keyword
Add products to cart and update quantities
Order history and status tracking
Admin dashboard for managing products and orders

Installation:
Clone the repository:
git clone https://github.com/aditikatiyar002/Your_Store.git

Install the dependencies for the client and server:
cd Your_Store
cd client && npm install
cd ../server && npm install
Set up the environment variables:

Create a .env file in the server directory.

Add the following variables to the file:
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_API_KEY=your_stripe_api_key

Start the server and client:
cd ../client && npm start
cd ../server && npm run dev
The client should open in your default browser at http://localhost:3000/ and the server should run at http://localhost:5000/.

Contributions are welcome! If you notice any bugs or would like to add a feature, please submit an issue or pull request.
