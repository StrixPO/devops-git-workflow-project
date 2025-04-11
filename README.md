# 🔐 Secure Header Checker

A simple Node.js application to check if a website has essential security headers. Built as part of a DevOps workflow with Git best practices.

## ⚙️ Features

- Scans any given website for critical HTTP security headers
- Returns results in JSON
- Uses Express.js and Axios
- Clean ES Module structure
- Built using Git best practices (branching, pull requests, tags)

## 🚀 How to Run

```
git clone https://github.com/<your-username>/secure-header-checker.git
cd secure-header-checker
npm install
node index.js
```
### In browser:
```
http://localhost:3000/check?url=https://example.com
```
✅ Security Headers Checked
  - Strict-Transport-Security
  - X-Content-Type-Options
  - X-Frame-Options
  - Content-Security-Policy
  - Referrer-Policy

📦 Technologies Used
  - Node.js
  - Express.js
  - Axios
  - Chalk

📚 Git Practices
  - Feature branching
  - Pull Requests
  - Semantic commits
  - Tags (v1.0.0, etc.)
  - .gitignore

🧠 DevOps Internship Task - Git Version Control
This project was completed as part of a hands-on internship task to demonstrate version control workflows and create a deployable, security-focused Node.js app.
