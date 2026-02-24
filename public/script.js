const API = "";
let severityChartInstance = null;

// ================= DEMO LOGIN =================
function demoLogin() {
  fetch(`${API}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: "demo@threatwatch.com",
      password: "123456"
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "dashboard.html";
    }
  });
}

// ================= LOGIN =================
function login() {
  fetch(`${API}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("message").innerText =
        data.message || "Login failed";
    }
  });
}

function filterAlerts(status) {
  loadAlerts(status);
}

// ================= Suggested Keywords Logic =================

function loadSuggestions() {
  fetch(`${API}/api/breaches/suggestions`, {
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  })
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("suggestions");
    container.innerHTML = "";

    data.forEach(item => {
      const btn = document.createElement("button");

      btn.innerHTML = `
        ${item.keyword.substring(0, 30)}...
        <br>
        <small style="color:${getSeverityColor(item.severity)}">
          ${item.severity}
        </small>
      `;

      btn.onclick = () => {
        document.getElementById("keyword").value = item.keyword;
        startScan();
      };

      container.appendChild(btn);
    });
  });
}

function getSeverityColor(severity) {
  if (severity === "High") return "red";
  if (severity === "Medium") return "orange";
  return "green";
}

// ================= Scan Animation Flow =================
function startScan() {
  const keywordValue = document.getElementById("keyword").value;

  if (!keywordValue) {
    alert("Enter a keyword");
    return;
  }

  document.getElementById("scanningMessage").classList.remove("hidden");

  setTimeout(() => {
    fetch(`${API}/api/keywords/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      },
      body: JSON.stringify({ keyword: keywordValue })
    })
    .then(() => {
      document.getElementById("scanningMessage").classList.add("hidden");

      loadAlerts();
      loadStats();

      showSection("alerts");
    });

  }, 1200); // 1.2 second scan simulation
}

// ================= LOAD ALERTS =================
function loadAlerts(status = "All") {
  let url = `${API}/api/alerts`;

  if (status !== "All") {
    url += `?status=${status}`;
  }

  fetch(url, {
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  })
  .then(res => res.json())
  .then(data => {
    const table = document.getElementById("alertsTable");
    table.innerHTML = "";

    if (data.length === 0) {
      table.innerHTML = `<tr><td colspan="7">No alerts found</td></tr>`;
      return;
    }

    data.forEach(alert => {
      table.innerHTML += `
        <tr>
          <td>${alert.keyword}</td>
          <td class="severity-${alert.severity.toLowerCase()}">
              ${alert.severity}
          </td>
          <td>${alert.riskScore}</td>
          <td>${alert.breach?.source || "-"}</td>
          <td>${alert.breach?.content || "-"}</td>
          <td>${alert.status}</td>
          <td>
            ${alert.status === "Pending"
              ? `<button onclick="resolveAlert('${alert._id}')">Resolve</button>`
              : "✓"}
          </td>
        </tr>
      `;
    });
  });
}

// ================= RESOLVE ALERT =================
function resolveAlert(id) {
  fetch(`${API}/api/alerts/resolve/${id}`, {
    method: "PUT",
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  })
  .then(() => {
    loadAlerts();
    loadStats();
  });
}

// ================= LOAD STATS =================
function loadStats() {
  fetch(`${API}/api/alerts/stats`, {
    headers: {
      "Authorization": "Bearer " + localStorage.getItem("token")
    }
  })
  .then(res => res.json())
  .then(stats => {

    const statsDiv = document.getElementById("stats");

    statsDiv.innerHTML = `
      <div class="stat-box stat-total">Total: ${stats.total}</div>
      <div class="stat-box stat-high">High: ${stats.high}</div>
      <div class="stat-box stat-medium">Medium: ${stats.medium}</div>
      <div class="stat-box stat-low">Low: ${stats.low}</div>
    `;

    renderChart(stats);
  });
}

function renderChart(stats) {
  const ctx = document.getElementById("severityChart");
  if (!ctx) return;

  if (severityChartInstance) {
    severityChartInstance.destroy();
  }

  severityChartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["High", "Medium", "Low"],
      datasets: [{
        data: [stats.high, stats.medium, stats.low],
        backgroundColor: ["#ef4444", "#f59e0b", "#10b981"]
      }]
    },
    options: {
      plugins: { legend: { display: false } }
    }
  });
}

// ================= Add Chart + Sidebar Logic =================

function showSection(section) {

  document.getElementById("dashboardSection").classList.add("hidden");
  document.getElementById("keywordsSection").classList.add("hidden");
  document.getElementById("alertsSection").classList.add("hidden");

  if (section === "dashboard") {
    document.getElementById("dashboardSection").classList.remove("hidden");
    loadStats();   // 👈 ADD THIS
  }

  if (section === "keywords") {
    document.getElementById("keywordsSection").classList.remove("hidden");
  }

  if (section === "alerts") {
    document.getElementById("alertsSection").classList.remove("hidden");
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// ================= LOGOUT =================
function logout() {
  localStorage.removeItem("token");
  window.location.href = "index.html";
}

// ================= AUTO LOAD =================
if (window.location.pathname.includes("dashboard.html")) {
  loadAlerts();
  loadStats();
  loadSuggestions();
}