# UniQuest Frontend

## Overview
UniQuest is a web application designed to facilitate university applications and streamline user interactions between applicants, universities, and administrators. This repository contains the frontend of the UniQuest platform, built using modern web technologies to provide a responsive, dynamic, and user-friendly interface.

## Tech Stack
The frontend is built using the following technologies:

- **React.js**: A JavaScript library for building component-based user interfaces.
- **JavaScript (ES6+)**: Core programming language for logic and interactivity.
- **HTML5 & CSS3**: Standard markup and styling languages for structuring and designing pages.
- **Vanilla CSS**: Used for styling components without relying on external frameworks.
- **React Router**: Provides client-side routing to navigate between different pages.
- **Fetch API**: Handles asynchronous HTTP requests to communicate with the backend.
- **Context API (Optional)**: For state management across components.
- **Custom Components**: Includes reusable elements such as `Button`, `Input`, `Card`, `Navbar`, `Footer`, and `Chatbot`.

## Features
- User authentication (Register/Login) with role-based access (Applicant, University, Admin).
- Dynamic dashboards tailored to user roles.
- Fully responsive pages: Home, Programs, HowToApply, Dashboard, Login, Register.
- Form validation for user input.
- Interactive chatbot component.
- Modular component structure for maintainability and scalability.

## Installation

Follow these steps to clone and run the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/maithilimukherjee/uni-frontend

2. **Navigate into project directory**
    ```bash
    cd uniquest-frontend

3. **Install Dependencies**
    ```bash
    npm install

4. **Update Backend API URL**

1. Open `Register.jsx` and `Login.jsx` in the `pages` folder.
2. Replace the `fetch` URLs with your backend server URL:


5. **Start development server**
    ```bash
       npm run dev

Make necessary changes. Deploy frontend on Vercel
Go to the backend folder. Clone, make necessary changes, deploy on Render.
---
### UniQuest Backend

Backend Folder Link: https://github.com/maithilimukherjee/uni-backend

## Setup Instructions

### Clone the Repository
```bash
git clone <your-backend-repo-url>
cd uniquest-backend
```

### Install dependencies
```bash
npm install
```
### Database Setup

- switch to a hosted SQL database (PostgreSQL recommended). To do this:
- Create a PostgreSQL database on your chosen provider.
- Obtain the following credentials:
DB_HOST (hostname or URL)
DB_USER (username)
DB_PASSWORD (password)
DB_NAME (database name)
DB_PORT (port, usually 5432)
Store these in a .env file in the project root (this file should not be committed to git):

```ini
DB_HOST=<your-host>
DB_USER=<your-username>
DB_PASSWORD=<your-password>
DB_NAME=<your-database-name>
DB_PORT=<your-port>
PORT=5000
```
### 4. Update db.js to connect to PostgreSQL using a library like pg instead of sqlite3.

Example for PostgreSQL:

```javascript
const { Pool } = require('pg');
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

module.exports = pool;
```

### 5. Configure Environment Variables

The backend reads the database credentials and server port from the .env file.

Ensure .env contains:

```env
PORT=5000
DB_HOST=<host>
DB_USER=<user>
DB_PASSWORD=<password>
DB_NAME=<database>
DB_PORT=<port>
```

### 5. Start the Backend Server Locally
```bash
npm run dev
```

## Server runs on http://localhost:5000.

All API requests from the frontend should point to this URL for local testing.

### 6. Deploying on Render / Railway

Push your backend repository to GitHub.

Create a new Node.js service on Render or Railway.

Connect your GitHub repository.

Add environment variables (PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT) in the Render/Railway dashboard.

If using PostgreSQL, ensure the cloud database allows access from Render/Railway IPs.

Render/Railway will automatically install dependencies and start the server using npm start or node server.js.

### 7. Update Frontend API URLs

After deployment, update the frontend fetch URLs in Register.jsx and Login.jsx to point to your live backend API URL:
```javascript
const response = await fetch('https://your-backend-url.com/api/auth/register', { ... });
const response = await fetch('https://your-backend-url.com/api/auth/login', { ... });
```

### 8. Testing

Make sure the backend is accessible and API endpoints return expected responses.

Verify user registration and login work correctly with role-based dashboards.

## Folder Structure

```bash
uniquest-backend/
│
├─ routes/         # API route definitions (auth.js)
├─ db.js           # Database connection and initialization
├─ server.js       # Entry point of the backend
├─ package.json    # Project dependencies and scripts
├─ package-lock.json
└─ .env            # Environment variables (not committed)
```