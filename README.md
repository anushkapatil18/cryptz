# Crypto Price Update and Email Notification Project
This project is a web application that allows users to track cryptocurrency prices and receive email notifications for price updates.

## Table of Contents
1. Introduction
2. Features
3. Technologies Used
4. Getting Started
5. Prerequisites
6. Installation
7. Usage
8. API Endpoints
9. Contributing
10. License

## Introduction
Cryptocurrency is a rapidly growing market, and many traders and investors are interested in keeping track of the latest price changes for various cryptocurrencies. This web application provides real-time price updates for multiple cryptocurrencies and allows users to subscribe to email notifications for their favorite cryptocurrencies.

## Features
- Real-time price updates for popular cryptocurrencies.
- User-friendly web interface for viewing cryptocurrency prices.
- Email notification service for subscribed cryptocurrencies.
- Dockerized backend and frontend for easy deployment.
- Technologies Used
- Frontend: React, Axios, Chart.js (or any other chart library)
- Backend: Node.js, Express.js, Nodemailer, SendGrid API (or any other email service)
- Database: MongoDB (or any other database)
- Deployment: Docker, Docker Compose

Getting Started
Prerequisites
Node.js (v14 or higher)
npm (Node Package Manager)
Docker (for deployment)

# Installation
1. Clone the repository:

   ```bash
   git clone https://github.com/anushkapatil18/cryptz.git
   cd cryptz

2. Install frontend dependencies:

   ```bash
   cd frontend
   npm install


3. Install backend dependencies:

   ```bash
   cd backend
   npm install


4. Start the application using Docker Compose:
   ```bash
   cd ..
   docker-compose up -d


# Usage
Once the application is up and running, you can access the web interface in your browser by navigating to http://localhost:3000. The interface will display real-time price charts for popular cryptocurrencies. Users can enter their email address to subscribe to price update notifications for specific cryptocurrencies.

# API Endpoints
POST /send_recovery_email: Send an email notification to the user with the latest price update for their subscribed cryptocurrencies.
Contributing
Contributions to this project are welcome! If you find any issues or have suggestions for improvements, feel free to open a pull request.

# License
This project is licensed under the MIT License. Feel free to use, modify, and distribute the code for both personal and commercial purposes.