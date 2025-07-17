# 🌐 SvelteKit Web App with AWS S3 + EC2 Deployment

This is a full-stack web application built with **SvelteKit** using a **hybrid cloud deployment model**. The **landing page** is hosted as a static website on **AWS S3**, while the **dynamic routes and APIs** are deployed on an **AWS EC2** instance running a Node.js server.

---

---

## 🛠️ Tech Stack

- **Frontend Framework:** SvelteKit
- **Cloud Services:**
  - **AWS S3** for static hosting (landing page)
  - **AWS EC2** for dynamic rendering and backend logic
- **Web Server (EC2):** Node.js
- **Deployment Tools:** AWS CLI, PM2, SCP, Git
- **(Optional)** NGINX as reverse proxy for EC2 server

---

## 📁 Project Structure

```plaintext
/
├── src/
│   ├── routes/
│   │   ├── +page.svelte         # Landing page (on S3)
│   │   ├── about/+page.svelte  # App pages (on EC2)
│   │   └── ...
├── static/                      # Static files
├── svelte.config.js
├── package.json
├── README.md
└── ...

🧠Architecture Advantages
This hybrid deployment leverages AWS S3 for static content and EC2 for backend-heavy pages, offering several real-world benefits:

1. Improved Performance
Static pages hosted on S3 load instantly from AWS edge locations.
Dynamic routes on EC2 focus only on what requires compute.

2. Cost-Effective
S3 is extremely cheap for hosting static content.
EC2 is used only when computation is necessary, reducing cost.

3. Separation of Concerns
UI/Marketing and Core Logic are decoupled.
Easier to develop, test, and deploy independently.

4. Scalable
S3 handles unlimited concurrent users.
EC2 can be scaled vertically or horizontally as needed.

5. Enhanced Security
Public access restricted to static content on S3.
EC2 APIs can be behind authentication, rate-limiting, and firewall rules.

6. Faster CI/CD
Push new marketing content to S3 without redeploying backend.
Backend changes are limited to EC2.

🎯 Real-World Use Case: Online Result Portals
🧪 Problem
Result portals (e.g., for CET, JEE, universities) often crash under high user load when results are announced due to:

Sudden traffic spikes

Resource overload

Inefficient content delivery

✅ Solution with This Architecture
Problem Faced	Hybrid Solution
❌ Server crash on load	✅ Landing page hosted on S3 scales automatically with no compute needed
❌ Long load times	✅ Cached or pre-rendered content ensures quick access
❌ API overload	✅ EC2 handles only dynamic operations like result lookups
❌ Expensive scaling	✅ Static and dynamic parts are scaled independently for cost-efficiency

