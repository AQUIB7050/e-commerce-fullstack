# 🛒 E-Commerce Full-Stack Application

A **full-stack e-commerce web application** built using **React** on the frontend and **Spring Boot** on the backend.  
The project follows a clean separation of concerns with RESTful APIs, scalable architecture, and modern development practices.

---

## ✨ Features

- User authentication (Register & Login)
- Product listing and product details
- Shopping cart management
- Order placement workflow
- RESTful API architecture
- Responsive frontend UI
- Clean and modular project structure

---

## 🧱 Tech Stack

### Frontend
- React
- JavaScript (ES6+)
- HTML5 & CSS3
- Axios / Fetch API

### Backend
- Java
- Spring Boot
- Spring Data JPA
- Spring Security (if enabled)
- REST APIs

### Database
- MySQL / PostgreSQL / H2 (configurable)

### Tools & Platforms
- Maven
- Node.js & npm
- Git & GitHub
- Postman

---

## 📁 Project Structure

```text
e-commerce-fullstack/
├── backend/        # Spring Boot backend
├── frontend/       # React frontend
├── .gitignore
├── README.md

```
---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/AQUIB7050/e-commerce-fullstack.git
cd e-commerce-fullstack
```



## ⚙️ Backend Setup

### Prerequisites

Java 17+

Maven

Database (MySQL / PostgreSQL / H2)

Run Backend
```
cd backend
mvn clean install
mvn spring-boot:run
```

Backend runs on:
``` http://localhost:8080 ```

### Database Configuration

Update application.properties:

```
spring.datasource.url=jdbc:mysql://localhost:3306/database_name
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

## 🎨 Frontend Setup

### Prerequisites

Node.js

npm

Run Frontend
```
cd frontend
npm install
npm start
```

Frontend runs on:
``` http://localhost:3000 ```

🔌 API Overview (Sample)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/products | Fetch all products |
| GET | /api/products/{id} | Product details |
| POST | /api/auth/register | User registration |
| POST | /api/auth/login | User login |
| POST | /api/orders | Place order |


🧪 Testing
Backend Tests

``` mvn test ```

Frontend Tests
``` npm test ```

## 📦 Deployment
### Backend

AWS EC2

Heroku

Render

### Frontend

Vercel

Netlify

GitHub Pages

## ⭐ Support
If you find this project helpful, please consider giving it a star ⭐ on GitHub.

## 👤 Author
### Aquib Ahmed Ansari
### Software Developer
