🚨 BreachRadar

BreachRadar is a deployed full-stack threat monitoring platform that simulates keyword-driven breach detection, risk scoring, and alert lifecycle management.

🔗 Live Demo: https://breachradar.onrender.com

💻 GitHub: https://github.com/SyedJameel8251/BreachRadar

🧠 Overview

BreachRadar allows users to monitor specific keywords (e.g., "credit card leak", "email database") and automatically generates alerts when matching breach data is detected.

The system includes:

Authentication (JWT-based)

Risk scoring engine

Alert lifecycle management

Interactive analytics dashboard

Cloud deployment with MongoDB Atlas

This project demonstrates backend scanning logic, secure authentication, cloud database integration, and production deployment.

🚀 Features
🔐 Authentication

JWT-based Login

Demo Login Support

Protected API routes

🔎 Keyword Monitoring

Add keywords for monitoring

Matching engine scans breach dataset

Prevents duplicate alerts

🚨 Alert Generation

Automatic alert creation when breach matches keyword

Severity-based risk scoring:

High → 90

Medium → 60

Low → 30

📊 Dashboard & Analytics

Total alerts

Severity breakdown

Interactive Chart.js visualization

Pending / Resolved status tracking

☁️ Production Deployment

MongoDB Atlas (Cloud Database)

Render (Cloud Hosting)

Fully deployed and accessible online

🛠 Tech Stack

Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

JWT (Authentication)

Bcrypt (Password Hashing)

Frontend

HTML

CSS

Vanilla JavaScript

Chart.js

Deployment

Render

MongoDB Atlas

🏗 Architecture

User → Authentication → Keyword Input
→ Matching Engine → Alert Creation
→ Risk Scoring → Dashboard Visualization

🔄 Alert Workflow

User logs in

Adds monitoring keyword

System scans breach collection

Matching breach triggers alert

Risk score calculated

Alert displayed in dashboard

User marks alert as Resolved
