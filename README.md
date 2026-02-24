<h1>🚨 BreachRadar</h1>
Keyword-Driven Threat Monitoring Platform
<p align="center"> <b>Live Demo:</b> https://breachradar.onrender.com <br/> <b>GitHub Repo:</b> https://github.com/SyedJameel8251/BreachRadar </p>
<h2>📌 Overview:</h2>

BreachRadar is a deployed full-stack threat monitoring platform that simulates keyword-based breach detection, risk scoring, and alert lifecycle management.

<div>
<h3>The system allows users to:</h3>
Monitor custom threat keywords
Automatically generate alerts
Prioritize threats using risk scores
Track alert resolution
Visualize severity analytics via dashboard
This project demonstrates backend scanning architecture, secure authentication, and cloud deployment.
</div>

<h2>🚀 Key Features:</h2>

<h3>🔐 Authentication:</h3>
<div>JWT-based login
Demo login support
Protected API routes
Password hashing using bcrypt</div>

<h3>🔎 Keyword Monitoring Engine:</h3>
Add custom monitoring keywords
Scans breach dataset for matches
Prevents duplicate alerts

<h3>🚨 Intelligent Alert System:</h3>
Automatic alert generation

<h4>Severity mapping:</h4>
High → 90 Risk Score
Medium → 60 Risk Score
Low → 30 Risk Score
Pending / Resolved lifecycle tracking

<h3>📊 Analytics Dashboard:</h3>
Total alert counter
Severity distribution
Chart.js visualization
Real-time data refresh

<h3>☁️ Cloud Deployment:</h3>
MongoDB Atlas (Cloud DB)
Render (Production Hosting)
Fully deployed & accessible online

<h3>🛠 Tech Stack:</h3>
<h4>Backend:</h4>
Node.js
Express.js
MongoDB Atlas
Mongoose
JWT Authentication
Bcrypt

<h4>Frontend:</h4>
HTML5
CSS3
Vanilla JavaScript
Chart.js
Deployment
Render
MongoDB Atlas

<div>
<p align="center">🏗 System Architecture
<p align="center">User Login
<p align="center"> ↓
<p align="center">Keyword Input
   <p align="center">↓
<p align="center">Matching Engine
   <p align="center">↓
<p align="center">Alert Generation
   <p align="center">↓
<p align="center">Risk Scoring
   <p align="center">↓
<p align="center">Dashboard Visualization
</div>

<h3>🔄 Alert Workflow:</h3>
User logs in (JWT authentication)
Adds monitoring keyword
System scans breach collection
Matching breach triggers alert
Risk score calculated
Alert appears in dashboard
User marks alert as resolved

<h3>💻 Local Setup:</h3>

<h4>Clone repository:</h4>
<p>git clone https://github.com/SyedJameel8251/BreachRadar.git</p>
<p>cd BreachRadar</p>
<p>npm install</p>

<h4>Create .env file:</h4>
<p>MONGO_URI=your_mongodb_connection_string</p>
<p>JWT_SECRET=your_secret</p>
<p>PORT=5000</p>

<h4>Run locally:</h4>
npm run dev

<h4>Visit:</h4>
http://localhost:5000

<h3>🌐 Live Application</h3>

🔗 https://breachradar.onrender.com

<h3>🎯 What This Project Demonstrates:</h3>
Secure authentication implementation
Backend scanning logic
Risk prioritization engine
Cloud database integration
Production debugging & deployment
Full-stack architecture

<h3>📈 Future Enhancements:</h3>
Scheduled automated scanning
Email notification system
Real-time updates (WebSockets)
Advanced scoring algorithm
Role-based access control

<h2>👨‍💻 Author:</h2>

<p>Syed Jameel</p>
<p>B.Tech CSE (2025)</p>
<p>Backend & Cybersecurity Enthusiast</p>


