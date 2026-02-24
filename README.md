🚨 BreachRadar
Keyword-Driven Threat Monitoring Platform
<p align="center"> <b>Live Demo:</b> https://breachradar.onrender.com <br/> <b>GitHub Repo:</b> https://github.com/SyedJameel8251/BreachRadar </p>
📌 Overview

BreachRadar is a deployed full-stack threat monitoring platform that simulates keyword-based breach detection, risk scoring, and alert lifecycle management.

The system allows users to:
Monitor custom threat keywords
Automatically generate alerts
Prioritize threats using risk scores
Track alert resolution
Visualize severity analytics via dashboard
This project demonstrates backend scanning architecture, secure authentication, and cloud deployment.

🚀 Key Features:

🔐 Authentication:
JWT-based login
Demo login support
Protected API routes
Password hashing using bcrypt

🔎 Keyword Monitoring Engine:
Add custom monitoring keywords
Scans breach dataset for matches
Prevents duplicate alerts

🚨 Intelligent Alert System
Automatic alert generation

Severity mapping:
High → 90 Risk Score
Medium → 60 Risk Score
Low → 30 Risk Score
Pending / Resolved lifecycle tracking

📊 Analytics Dashboard:
Total alert counter
Severity distribution
Chart.js visualization
Real-time data refresh

☁️ Cloud Deployment:
MongoDB Atlas (Cloud DB)
Render (Production Hosting)
Fully deployed & accessible online

🛠 Tech Stack:
Backend:
Node.js
Express.js
MongoDB Atlas
Mongoose
JWT Authentication
Bcrypt

Frontend:
HTML5
CSS3
Vanilla JavaScript
Chart.js
Deployment
Render
MongoDB Atlas

🏗 System Architecture
User Login
   ↓
Keyword Input
   ↓
Matching Engine
   ↓
Alert Generation
   ↓
Risk Scoring
   ↓
Dashboard Visualization

🔄 Alert Workflow:
User logs in (JWT authentication)
Adds monitoring keyword
System scans breach collection
Matching breach triggers alert
Risk score calculated
Alert appears in dashboard
User marks alert as resolved

💻 Local Setup:

Clone repository:
git clone https://github.com/SyedJameel8251/BreachRadar.git
cd BreachRadar
npm install

Create .env file:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret
PORT=5000

Run locally:
npm run dev

Visit:
http://localhost:5000
🌐 Live Application

🔗 https://breachradar.onrender.com

🎯 What This Project Demonstrates:
Secure authentication implementation
Backend scanning logic
Risk prioritization engine
Cloud database integration
Production debugging & deployment
Full-stack architecture

📈 Future Enhancements:
Scheduled automated scanning
Email notification system
Real-time updates (WebSockets)
Advanced scoring algorithm
Role-based access control

👨‍💻 Author:

Syed Jameel
B.Tech CSE (2025)
Backend & Cybersecurity Enthusiast
