# 📋 Task Manager Application (MERN Stack)

## 📌 Project Overview

The **Task Manager Application** is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application that helps users organize and manage daily tasks. Users can register, log in securely, create, update, delete, and filter tasks based on their status. The application uses JWT authentication to secure user data and provides a clean, responsive interface for efficient task management.

---

## 🚀 Features

- 🔐 User Registration and Login
- 🔑 JWT Authentication
- ✅ Create, Read, Update, Delete (CRUD) Tasks
- 📂 Filter Tasks by Status
- 🔍 Search Tasks
- 📱 Responsive User Interface
- ☁️ MongoDB Database Integration
- ⚡ RESTful API using Express.js

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS / Bootstrap

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js
- dotenv
- CORS

---

## 📁 Project Structure

```
Task-Manager/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/ANUPKUMAR130013/Task-Manager-Application
cd task-manager
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Create a `.env` File

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Start the Backend Server

```bash
npm run dev
```

or

```bash
node server.js
```

### 5. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

### 6. Start the Frontend

```bash
npm run dev
```

---

## 🌐 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register User |
| POST | /api/auth/login | Login User |

### Tasks

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/tasks | Get All Tasks |
| POST | /api/tasks | Create Task |
| PUT | /api/tasks/:id | Update Task |
| DELETE | /api/tasks/:id | Delete Task |

---

## 📸 Screenshots

Create a folder named **screenshots** and add images such as:

```
screenshots/
├── login.png
├── register.png
├── dashboard.png
├── add-task.png
├── task-list.png
```

---

## 📦 Dependencies

### Backend

- express
- mongoose
- jsonwebtoken
- bcryptjs
- dotenv
- cors
- nodemon

### Frontend

- react
- react-router-dom
- axios

---

## 🔒 Authentication

- Passwords are securely hashed using **bcrypt.js**.
- JWT is used for user authentication.
- Protected routes require a valid authentication token.

---

## 🎯 Future Enhancements

- 📅 Task Due Dates
- 📧 Email Notifications
- 🌙 Dark Mode
- 🏷️ Task Categories
- 📊 Dashboard Analytics
- 🤝 Team Collaboration
- 📎 File Attachments

---

## 👨‍💻 Author

**Anup Kumar**

B.Tech – Information Technology

Rajkiya Engineering College, Banda

---

