# User Management App

## Overview
This is a **User Management Dashboard** built using **Vite + React**. The app interacts with the **Reqres API** to perform CRUD operations, including:

- **User Authentication** (Login via API)
- **User Listing** (Fetched with Pagination)
- **User Editing** (Update user details)
- **User Deletion** (Remove a user from the list)
- **Responsive UI** (Optimized for desktop & mobile)

The app is designed to be lightweight and fast, leveraging React's component-based structure for easy maintenance and scalability.

---

## Flow of the Application

1. **Login Page**
   - The user logs in using credentials (email & password)
   - Authentication is handled using Reqres API (`https://reqres.in/api/login`)
   - On successful login, the user is redirected to the dashboard

2. **User Dashboard**
   - Displays a **paginated list** of users fetched from Reqres API (`https://reqres.in/api/users`)
   - Shows user avatars, names, and emails in a **card layout**
   - Users are displayed in a **flexbox/grid structure**

3. **Editing Users**
   - Clicking the **Edit** button opens a form with user details
   - Users can modify the name and email and save changes
   - Updates are reflected instantly in the UI (mock update for API consistency)

4. **Deleting Users**
   - Clicking **Delete** removes the user from the UI (mock delete)
   - Confirmation ensures accidental deletions are avoided

5. **Pagination**
   - Users can navigate between pages
   - Page numbers are fetched dynamically from the API

6. **Responsive Design**
   - Works smoothly on **both desktop & mobile**
   - Uses **flexbox** for adaptive layouts

---

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [Vite](https://vitejs.dev/)

### Steps to Run Locally
1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/repo-name.git
   cd repo-name
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   - The app will run at **http://localhost:5173**

---

## Deployment on Vercel

1. **Install Vercel CLI (if not installed)**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy the project**
   ```bash
   vercel
   ```
   - Follow the prompts to configure the deployment
   - Once completed, Vercel will provide a live link

---

## Technologies Used

- **Frontend:** React, Vite, TailwindCSS (if applicable)
- **API:** Reqres API (Mock user data)
- **State Management:** useState, useEffect
- **Routing:** React Router
- **Deployment:** Vercel

---

## Features To Be Added

- **Search & Filter Users**
- **Persistent Login (Auth Context)**
- **Backend Integration (Replace Reqres API)**

---

## Contributing
Feel free to fork this repository and submit pull requests for improvements!

---

## License
This project is **MIT licensed**. You are free to use, modify, and distribute it as per the license terms.

