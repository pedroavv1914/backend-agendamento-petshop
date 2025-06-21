# 🐶 Petshop Backend

🔗 A robust RESTful API built with Express and SQLite to manage petshop appointments and services.

## 📋 Table of Contents
- [✨ Features](#features)
- [🛠️ Technologies Used](#technologies-used)
- [🏗️ Project Structure](#project-structure)
- [🚀 Getting Started](#getting-started)
- [📡 API Endpoints](#api-endpoints)
- [🤝 Contributing](#contributing)

## ✨ Features
- 📅 Schedule and manage pet appointments
- 📝 CRUD operations for appointments
- 🐾 Simple SQLite database integration
- 🔒 CORS enabled for frontend integration
- ⚡ Fast and lightweight

## 🛠️ Technologies Used
- ![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white)
- ![SQLite](https://img.shields.io/badge/-SQLite-003B57?logo=sqlite&logoColor=white)
- ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white)

## 🏗️ Project Structure
```
backend/
├── agendamentos.db     # 🗃️ SQLite database
├── agendamentos.js     # 📄 Appointments routes and logic
├── db.js               # 🛢️ Database connection
├── index.js            # 🚀 API entry point
├── package.json        # 📦 Dependencies
```

## 🚀 Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
   Or start normally:
   ```bash
   npm start
   ```
3. The API will run by default at: `http://localhost:3002`

## 📡 API Endpoints
- `GET /agendamentos` — List all appointments
- `POST /agendamentos` — Create a new appointment
- `PUT /agendamentos/:id` — Update an appointment
- `DELETE /agendamentos/:id` — Delete an appointment

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

--

Made with ❤️ by Pedro
