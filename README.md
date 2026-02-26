<h1 align="center">🚨 BreachRadar – Keyword-Driven Threat Monitoring Platform</h1>

<p align="center">
  A Full-Stack Threat Intelligence Simulation Platform <br>
  Built using Node.js, Express, MongoDB Atlas & Deployed on Render
</p>

<p align="center">
  <a href="https://breachradar.onrender.com" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit%20Now-brightgreen?style=for-the-badge">
  </a>
  <a href="https://github.com/SyedJameel8251/BreachRadar" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge">
  </a>
</p>

<hr>

<h2>🚀 Live Deployment</h2>

<p>
🔗 <strong>Live Application:</strong>  
<a href="https://breachradar.onrender.com">
https://breachradar.onrender.com
</a>
</p>

<p>
💻 <strong>GitHub Repository:</strong>  
<a href="https://github.com/SyedJameel8251/BreachRadar">
https://github.com/SyedJameel8251/BreachRadar
</a>
</p>

<hr>

<h2>📌 Project Overview</h2>

<p>
BreachRadar is a deployed full-stack threat monitoring platform that simulates keyword-based breach detection and risk prioritization.
</p>

<p>
Users can monitor custom keywords (e.g., “credit card leak”, “email database”), and the system automatically generates alerts when matching breach data is detected.
</p>

<p>
The platform includes secure authentication, alert lifecycle management, risk scoring, and an analytics dashboard with visualization.
</p>

<hr>

<h2>✨ Key Features</h2>

<ul>
  <li>🔐 JWT-Based Authentication (Login / Demo Access)</li>
  <li>🔎 Keyword Monitoring Engine</li>
  <li>🚨 Automatic Alert Generation</li>
  <li>📊 Risk Scoring System (High / Medium / Low)</li>
  <li>🔄 Alert Status Management (Pending → Resolved)</li>
  <li>📈 Interactive Dashboard with Chart.js</li>
  <li>☁️ Cloud Database Integration (MongoDB Atlas)</li>
  <li>🌐 Production Deployment on Render</li>
</ul>

<hr>

<h2>🛠 Tech Stack</h2>

<h3>Backend</h3>
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>MongoDB Atlas</li>
  <li>Mongoose ODM</li>
  <li>JWT (Authentication)</li>
  <li>Bcrypt (Password Hashing)</li>
</ul>

<h3>Frontend</h3>
<ul>
  <li>HTML5</li>
  <li>CSS3</li>
  <li>Vanilla JavaScript</li>
  <li>Chart.js</li>
</ul>

<h3>Deployment & Cloud</h3>
<ul>
  <li>MongoDB Atlas (Cloud Database)</li>
  <li>Render (Web Hosting)</li>
  <li>Environment Variables for Security</li>
</ul>

<hr>

<h2>📂 Project Structure</h2>

<pre>
BreachRadar/
│
├── models/        → Mongoose Schemas (User, Breach, Alert, Keyword)
├── routes/        → API Route Controllers
├── middleware/    → Authentication Middleware
├── public/        → Static Frontend (HTML, CSS, JS)
│
├── config/        → Database Configuration
├── server.js      → Main Application Entry Point
└── package.json   → Dependencies & Scripts
</pre>

<hr>

<h2>⚙️ Installation & Local Setup</h2>

<h3>1️⃣ Clone the Repository</h3>

<pre>
git clone https://github.com/SyedJameel8251/BreachRadar.git
cd BreachRadar
</pre>

<h3>2️⃣ Install Dependencies</h3>

<pre>
npm install
</pre>

<h3>3️⃣ Create Environment Variables</h3>

Create a <code>.env</code> file in the root directory:

<pre>
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
</pre>

<h3>4️⃣ Start the Server</h3>

<pre>
npm run dev
</pre>

Visit:

<pre>
http://localhost:5000
</pre>

<hr>

<h2>🔄 Alert Workflow</h2>

<ol>
  <li>User logs in via JWT authentication</li>
  <li>User adds monitoring keyword</li>
  <li>System scans breach dataset</li>
  <li>Matching breach triggers alert</li>
  <li>Risk score assigned based on severity</li>
  <li>Alert displayed in dashboard</li>
  <li>User marks alert as Resolved</li>
</ol>

<hr>

<h2>🎯 Learning Outcomes</h2>

<ul>
  <li>Designed backend scanning architecture</li>
  <li>Implemented JWT authentication securely</li>
  <li>Built risk scoring & alert lifecycle logic</li>
  <li>Integrated cloud database (MongoDB Atlas)</li>
  <li>Deployed production-ready full-stack application</li>
  <li>Debugged real-world deployment & networking issues</li>
</ul>

<hr>

<h2>🔒 Security Implementation</h2>

<ul>
  <li>Password hashing using Bcrypt</li>
  <li>JWT-based protected API routes</li>
  <li>Environment variables for sensitive credentials</li>
  <li>Cloud firewall configuration (MongoDB Atlas IP Whitelisting)</li>
</ul>

<hr>

<h2>👨‍💻 Author</h2>

<p>
<strong>Syed Jameel</strong><br>
B.Tech Computer Science (2025)<br>
Aspiring Backend & Cybersecurity Developer<br>
</p>

<hr>

<h2>📜 License</h2>

<p>
This project is developed for academic and portfolio purposes.
</p>

<hr>

<p align="center">
⭐ If you found this project helpful, consider giving it a star on GitHub!
</p>
